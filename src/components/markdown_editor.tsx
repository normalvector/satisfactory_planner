import * as React from 'react'
import Editor from '@monaco-editor/react'
import { Button } from '@blueprintjs/core'
import * as SampleMarkdown from '../sample_markdown'

interface MarkdownEditorProps {
    markdown?: string
    onChange: (md: string) => void
}

function MarkdownEditor(props: MarkdownEditorProps): React.ReactElement {
    const { markdown, onChange } = props

    // Provide an empty string instead of an undefined
    function onChangeWrapper(val: string | undefined) {
        onChange(val ? val : '')
    }

    function onResetMarkdown() {
        console.log("Resetting markdown: ", SampleMarkdown.basic_ingredients)
        onChange(SampleMarkdown.basic_ingredients)
    }

    return (
        <div>
            <Editor
                value={markdown}
                onChange={onChangeWrapper}
                language="markdown"
                theme="vs-dark"
                height="30rem"
            />
            <Button icon="refresh" intent="danger" text="Load Default Markdown" onClick={onResetMarkdown} />
        </div>
    )
}

export default MarkdownEditor