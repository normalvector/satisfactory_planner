import * as React from 'react'
import { marked } from 'marked'

interface MarkdownRendererProps {
    markdown: string
}

const SatisfactoryTrackerName = 'SatisfactoryTracker'
const SatisfactoryTracker = {
    name: SatisfactoryTrackerName,
    level: 'block',
    start(src: any) {
        console.log("\n\nSTART SRC: ", typeof (src), src)
        return src.match(/^(\s*)([+-])\s*(\d+)\s*(.*)/)?.index
    },
    tokenizer(src: any, tokens: any) {
        const rule = /^(\s*)([+-])\s*(\d+)\s*(.*)/
        //const rule = /^(\s+)([+-])\s*(.*?)/
        const match = rule.exec(src)
        if (match) {
            console.log('----------------')
            console.log("TOKENIZER SRC: ", typeof (src), src)
            console.log("TOKENIZER TOKENS: ", typeof (tokens), tokens)

            console.log("TOKENIZER MATCH: ", match)

            // Get the number and canonical name of the items we're handling
            const delta =
                match[2] === '-' ?
                    -parseInt(match[3]) :
                    parseInt(match[3])
            const canonicalName = match[4].toLowerCase()
            console.log("TOKENIZER VALUE/NAME: ", delta, ' x ', canonicalName)

            const token = {
                type: SatisfactoryTrackerName,
                raw: match[0],
                delta: delta,
                name: canonicalName,
                tokens: []
            }
            console.log("TOKENIZER TOKEN: ", token)

            this.lexer.inline(token.raw, token.tokens)
            return token
        }
    },
    renderer(token: any) {
        console.log("TOKENIZER RENDERER: ", token)
        return `*START* ${JSON.stringify(token)} *END*}`
    }
}
marked.use({
    extensions: [SatisfactoryTracker]
})
function MarkdownRenderer(props: MarkdownRendererProps): React.ReactElement {
    const { markdown } = props

    const renderedMarkdown = marked.parse(markdown)

    return (
        <div dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
    )
}

export default MarkdownRenderer
