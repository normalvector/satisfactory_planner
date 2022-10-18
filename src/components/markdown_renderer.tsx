import * as React from 'react'
import { marked } from 'marked'

interface MarkdownRendererProps {
    markdown: string
}

// {"Iron Ingots": 30, "Iron Ore": -30}
var itemTracker = {}

const SatisfactoryTrackerName = 'SatisfactoryTracker'
const SatisfactoryTracker = {
    name: SatisfactoryTrackerName,
    level: 'block',
    start(src: any) {
        //console.log("\n\nSTART SRC: ", typeof (src), src)
        return src.match(/^(\s*)([+-])\s*(\d+)\s*(.*)/)?.index
    },
    tokenizer(src: any, tokens: any) {
        const rule = /^(\s*)([+-])\s*(\d+)\s*(.*)/
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
            const displayName = match[4]
            const canonicalName = displayName.toLowerCase()
            //console.log("TOKENIZER VALUE/NAME: ", delta, ' x ', canonicalName)

            const token = {
                type: SatisfactoryTrackerName,
                raw: match[0],
                delta: delta,
                displayName: displayName,
                canonicalName: canonicalName,
                tokens: []
            }
            //console.log("TOKENIZER TOKEN: ", token)

            this.lexer.inline(token.raw, token.tokens)
            return token
        }
    },
    renderer(token: any) {
        //console.log("TOKENIZER RENDERER: ", token)

        // Adjust the tracking values
        itemTracker[token.canonicalName] ||= 0
        itemTracker[token.canonicalName] += token.delta
        const trackedValue = itemTracker[token.canonicalName]

        const output = `<p><pre>${token.delta >= 0 ? '+' : ''}${token.delta} ${token.displayName} (${trackedValue})</pre></p>`
        //console.log("TOKENIZER RENDERER OUTPUT: ", output)
        return output
    }
}

const SatisfactoryInventoryName = 'SatisfactoryInventory'
const SatisfactoryInventory = {
    name: SatisfactoryInventoryName,
    level: 'block',
    start(src: any) {
        return src.match(/^InventorySummary/)?.index
    },
    tokenizer(src: any, tokens: any) {
        const rule = /^InventorySummary/
        const match = rule.exec(src)
        if (match) {
            const token = {
                type: SatisfactoryInventoryName,
                raw: match[0],
                tokens: []
            }
            console.log("TOKENIZER TOKEN: ", token)

            this.lexer.inline(token.raw, token.tokens)

            return token
        }
    },
    renderer(token: any) {
        const itemNames = Object.keys(itemTracker).sort()
        const itemSummary = itemNames.map(
            (name) => {
                const count = itemTracker[name]
                return `<li>${count}\ ${name}</li>`
            }
        )
        const output = `
        <div>
        <ul>${itemSummary}</ul>
        </div>
        `
        console.log("OUTPUT: ", output)
        return output
    }
}

marked.use({
    extensions: [SatisfactoryTracker, SatisfactoryInventory]
})
function MarkdownRenderer(props: MarkdownRendererProps): React.ReactElement {
    const { markdown } = props
    itemTracker = {}

    const renderedMarkdown = marked.parse(markdown)

    return (
        <div dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
    )
}

export default MarkdownRenderer
