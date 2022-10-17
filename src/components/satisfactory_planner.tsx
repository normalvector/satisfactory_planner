import * as React from 'react'
import MarkdownEditor from './markdown_editor'
import MarkdownRenderer from './markdown_renderer'
import { Tab, Tabs } from '@blueprintjs/core'
import * as SampleMarkdown from '../sample_markdown'

import * as css from '../css/_main.scss'

// Copy the CSS object so that it's not pruned..
// @ts-ignore This is a weird edge case
// eslint-disable-next-line
var processCss = css;


function SatisfactoryPlanner(): React.ReactElement {
    // Get the sample data
    const initialMarkdown = SampleMarkdown.basic_ingredients

    const [markdown, setMarkdown] = React.useState<string>(initialMarkdown);

    const onMarkdownChange = (md: string) => {
        setMarkdown(md)
    }

    return (
        <div>
            <h1>Satisfactory Planner TANS</h1>
            <Tabs>
                <Tab id="markdown" title="Markdown"
                    panel={
                        <div>
                            <MarkdownEditor markdown={markdown} onChange={onMarkdownChange} />
                            <MarkdownRenderer markdown={markdown} />
                        </div>
                    } />
                <Tab id="items" title="Items">

                </Tab>
                <Tab id="recipes" title="Recipes"></Tab>
            </Tabs>
        </div>
    )
}

export default SatisfactoryPlanner