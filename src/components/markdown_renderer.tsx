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
            //console.log('----------------')
            //console.log("TOKENIZER SRC: ", typeof (src), src)
            //console.log("TOKENIZER TOKENS: ", typeof (tokens), tokens)

            //console.log("TOKENIZER MATCH: ", match)

            // Get the number, display name, and canonical name of the items we're handling
            const delta =
                match[2] === '-' ?
                    -parseInt(match[3]) :
                    parseInt(match[3])
            const name = match[4].trim()
            const options = match[5]?.toLowerCase().split(/\s+/) || []
            //console.log("TOKENIZER VALUE/NAME: ", delta, ' x ', canonicalName)

            const token = {
                type: SatisfactoryTrackerName,
                raw: match[0],
                delta: delta,
                name: name,
                tokens: [],
                isRaw: options.includes('raw'),
                isLocal: options.includes('local')
            }
            //console.log("TOKENIZER TOKEN: ", token)

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
            return `Adding ${token.delta}x ${name} for ${total} remaining ${token.isLocal ? ' in local storage' : ''}`
        }

        // Find the recipe
        console.log("GLOBAL RECIPES: ", globalRecipes)
        const recipe: Recipe | undefined = globalRecipes.find((recipe) => recipe.name === name)
        console.log("Applying recipe ", recipe)

        var message: string = recipe ?
            `<p>${inventory.applyRecipe(recipe, token.delta)}${token.isLocal ? ' to local storage' : ''}</p>` :
            `<p>Cannot find recipe '${name}'</p>`

        return message
    }
}

const SatisfactoryInventorySummaryName = 'SatisfactoryInventory'
const SatisfactoryInventorySummary = {
    name: SatisfactoryInventorySummaryName,
    level: 'block',
    start(src: any) {
        return src.match(/^InventorySummary/)?.index
    },
    tokenizer(src: any, tokens: any) {
        const rule = /^InventorySummary/
        const match = rule.exec(src)
        if (match) {
            const token = {
                type: SatisfactoryInventorySummaryName,
                raw: match[0],
                tokens: []
            }
            console.log("TOKENIZER TOKEN: ", token)

            this.lexer.inline(token.raw, token.tokens)

            return token
        }
    },
    renderer(token: any) {
        //return 'WIBBLE'
        const itemSummary = mainInventory.itemNames().map(
            (name) => {
                const count = mainInventory.getCount(name)
                return `<li>${count}x ${name}</li>`
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

        return <p>Resetting local inventory</p>
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
