import * as React from 'react'
import { marked } from 'marked'

interface MarkdownRendererProps {
    markdown: string
}

function MarkdownRenderer(props: MarkdownRendererProps): React.ReactElement {
    const { markdown } = props

    const renderedMarkdown = marked.parse(markdown)

    return (
        <div dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
    )
}

export default MarkdownRenderer
