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
const SatisfactoryTracker = {
    name: SatisfactoryTrackerName,
    level: 'block',
    start(src: any) {
        //console.log("\n\nSTART SRC: ", typeof (src), src)
        return src.match(/^(\s*)([+-])\s*(\d+)\s*(.*)/)?.index
    },
    tokenizer(src: any, tokens: any) {
        const rule = /^(\s*)([+-])\s*(\d+)\s*([^!\n\r]*)(?:!([\w\s]*))?/
        //const rule = /^(\s+)([+-])\s*(.*?)/
        const match = rule.exec(src)
        if (match) {
            // Get the number, display name, and canonical name of the items we're handling
            const delta =
                match[2] === '-' ?
                    -parseInt(match[3]) :
                    parseInt(match[3])
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
            return `<p>Adding ${token.delta}x ${name} for ${total} remaining ${token.isLocal ? ' in local storage' : ''}</p>`
        }

        // Find the recipe
        console.log("GLOBAL RECIPES: ", globalRecipes)
        const recipe: Recipe | undefined = globalRecipes.find((recipe) => recipe.name === name)
        console.log("Applying recipe ", recipe)
        if (!recipe) {
            return `<p>Cannot find recipe '${name}'</p>`
        }

        // Apply the recipe
        const recipeMsg = inventory.applyRecipe(recipe, token.delta, localInventory)
        return `<p>${recipeMsg}${token.isLocal ? ' to local storage' : ''}</p>`
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
            console.log("INV OPTS: ", options)
            const token = {
                type: SatisfactoryInventorySummaryName,
                raw: match[0],
                isLocal: options.includes('local'),
                tokens: []
            }
            console.log("TOKENIZER TOKEN: ", token)

            this.lexer.inline(token.raw, token.tokens)

            return token
        }
    },
    renderer(token: any) {
        const inventory = token.isLocal ? localInventory : mainInventory
        const itemSummary = inventory.itemNames().map(
            (name) => {
                const count = inventory.getCount(name)
                return `<li>${count}x ${name}${token.isLocal ? ' (Local)' : ''}</li>`
            }
        ).join('')
        const output = `
        <div>
        <ul>${itemSummary}</ul>
        </div>
        `
        console.log("OUTPUT: ", output)
        return output
    }
}

const SatisfactoryLocalInventoryName = 'SatisfactoryLocalInventory'
const SatisfactoryLocalInventory = {
    name: SatisfactoryLocalInventoryName,
    level: 'block',
    start(src: any) {
        return src.match(/^LocalInventory/)?.index
    },
    tokenizer(src: any, tokens: any) {
        const rule = /^LocalInventory/
        const match = rule.exec(src)
        if (match) {
            const token = {
                type: SatisfactoryLocalInventoryName,
                raw: match[0],
                tokens: []
            }
            console.log("TOKENIZER TOKEN: ", token)

            this.lexer.inline(token.raw, token.tokens)

            return token
        }
    },
    renderer(token: any) {
        localInventory = new Inventory()

        return ('<p>Resetting local inventory</p>')
    }
}

marked.use({
    extensions: [SatisfactoryTracker, SatisfactoryInventorySummary, SatisfactoryLocalInventory]
})

function MarkdownRenderer(props: MarkdownRendererProps): React.ReactElement {
    const { markdown, recipes } = props

    globalRecipes = recipes
    const renderedMarkdown = marked.parse(markdown)

    return (
        <div dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
    )
}

export default MarkdownRenderer
