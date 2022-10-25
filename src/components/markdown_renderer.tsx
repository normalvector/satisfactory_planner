import * as React from 'react'
import { marked } from 'marked'
import Inventory from '../inventory'
import Recipe from '../recipe'

interface MarkdownRendererProps {
    markdown: string,
    recipes: Recipe[]
}

// {"Iron Ingots": 30, "Iron Ore": -30}
//var itemTracker = {}

// This stores the recipes- it's currently global to allow the MD plugins to use it
var globalRecipes: Recipe[] = []

// Stores everything in the inventory
const mainInventory: Inventory = new Inventory()
var localInventory: Inventory = new Inventory()

const SatisfactoryTrackerName = 'SatisfactoryTracker'
const SatisfactoryTracker: marked.MarkedExtension = {
    name: SatisfactoryTrackerName,
    level: 'block',
    start(src: any) {
        //console.log("\n\nSTART SRC: ", typeof (src), src)
        return src.match(/^(\s*)([+-])\s*(\d.?\d*)\s*(.*)/)?.index
    },
    tokenizer(src: string, tokens: marked.Token[]) {
        const rule = /^(\s*)([+-])\s*(\d.?\d*)\s*([^!\n\r]*)(?:!([\w\s]*))?/
        //const rule = /^(\s+)([+-])\s*(.*?)/
        const match = rule.exec(src)
        if (match) {
            // Get the number, display name, and canonical name of the items we're handling
            const delta =
                match[2] === '-' ?
                    -parseFloat(match[3]) :
                    parseFloat(match[3])
            const name = match[4].trim()
            const options = match[5]?.toLowerCase().split(/\s+/) || []

            const token = {
                type: SatisfactoryTrackerName,
                raw: match[0],
                delta: delta,
                name: name,
                tokens: [],
                isRaw: options.includes('raw'),
                isLocal: options.includes('local')
            }

            this.lexer.inline(token.raw, token.tokens)
            return token
        }
    },
    renderer(token: any) {
        const name = token.name

        // Get the correct inventory to use- main or local
        const inventory = token.isLocal ? localInventory : mainInventory

        // If this is raw then just add the item
        if (token.isRaw) {
            inventory.addItem(name, token.delta)
            const total = inventory.getCount(name)
            return `<p class="planner_data">Adding ${token.delta}x ${name} for ${total} remaining ${token.isLocal ? ' to local inventory' : ''}</p>`
        }

        // Find the recipe
        console.log("GLOBAL RECIPES: ", globalRecipes)

        const recipe: Recipe | undefined = globalRecipes.find((recipe) => recipe.name === name)
        //console.log("Applying recipe ", recipe)
        if (!recipe) {
            return `<p class="planner_error">Cannot find recipe '${name}'</p>`
        }

        // Apply the recipe
        const recipeMsg = inventory.applyRecipe(recipe, token.delta, [localInventory, mainInventory])
        return `<p class="planner_data">${recipeMsg}${token.isLocal ? ' to local inventory' : ''}</p>`
    }
}

const SatisfactoryInventorySummaryName = 'SatisfactoryInventory'
const SatisfactoryInventorySummary = {
    name: SatisfactoryInventorySummaryName,
    level: 'block',
    start(src: any) {
        return src.match(/^InventorySummary(?:\s*!([\w\s]*))?/)?.index
    },
    tokenizer(src: any, tokens: any) {
        const rule = /^InventorySummary(?:\s*!([\w\s]*))?/
        const match = rule.exec(src)
        if (match) {
            const options = match[1]?.toLowerCase().split(/\s+/) || []
            //console.log("INV OPTS: ", options)
            const token = {
                type: SatisfactoryInventorySummaryName,
                raw: match[0],
                isLocal: options.includes('local'),
                tokens: []
            }
            //console.log("TOKENIZER TOKEN: ", token)

            this.lexer.inline(token.raw, token.tokens)

            return token
        }
    },
    renderer(token: any) {
        const inventory = token.isLocal ? localInventory : mainInventory
        const itemSummary = inventory.itemNames().map(
            (name) => {
                const count = inventory.getCount(name)
                const className = count < 0 ? 'planner_warning' : 'planner_data'
                // Skip items with zero count
                return count != 0 ? `<li class="${className}">${count}x ${name}${token.isLocal ? ' (Local)' : ''}</li>` : ''
            }
        ).join('')
        const output = `
        <div>
        <ul class="planner_data">${itemSummary}</ul>
        </div>
        `
        //console.log("OUTPUT: ", output)
        return output
    }
}

const SatisfactoryLocalInventoryName = 'SatisfactoryLocalInventory'
const SatisfactoryLocalInventory = {
    name: SatisfactoryLocalInventoryName,
    level: 'block',
    start(src: any) {
        return src.match(/^ResetLocalInventory/)?.index
    },
    tokenizer(src: any, tokens: any) {
        const rule = /^ResetLocalInventory/
        const match = rule.exec(src)
        if (match) {
            const token = {
                type: SatisfactoryLocalInventoryName,
                raw: match[0],
                tokens: []
            }
            ///console.log("TOKENIZER TOKEN: ", token)

            this.lexer.inline(token.raw, token.tokens)

            return token
        }
    },
    renderer(token: any) {
        localInventory.clear()

        return ('<p class="planner_data"><i>Resetting local inventory</i></p>')
    }
}

marked.use({
    extensions: [SatisfactoryTracker, SatisfactoryInventorySummary, SatisfactoryLocalInventory]
})

function MarkdownRenderer(props: MarkdownRendererProps): React.ReactElement {
    const { markdown, recipes } = props

    globalRecipes = recipes
    mainInventory.clear()
    localInventory.clear()

    const renderedMarkdown = marked.parse(markdown)

    return (
        <div className='markdown-body' dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
    )
}

export default MarkdownRenderer
