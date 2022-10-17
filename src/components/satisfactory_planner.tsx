import * as React from 'react'
import MarkdownEditor from './markdown_editor'
import MarkdownRenderer from './markdown_renderer'

import * as SampleMarkdown from '../sample_markdown'

function SatisfactoryPlanner(): React.ReactElement {
    // Get the sample data
    const initialMarkdown = SampleMarkdown.basic_ingredients

    const [markdown, setMarkdown] = React.useState<string>(initialMarkdown);

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