import * as React from 'react'
import MarkdownEditor from './markdown_editor'
import MarkdownRenderer from './markdown_renderer'

function SatisfactoryPlanner(): React.ReactElement {
    const [markdown, setMarkdown] = React.useState<string>('');

    const onMarkdownChange = (md: string) => {
        setMarkdown(md)
    }

    return (
        <div>
            <h1>Satisfactory Planner</h1>
            <MarkdownEditor markdown={markdown} onChange={onMarkdownChange} />
            <MarkdownRenderer markdown={markdown} />
        </div>
    )
}

export default SatisfactoryPlanner