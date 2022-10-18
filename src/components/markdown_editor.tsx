import * as React from 'react'
import Editor from '@monaco-editor/react'

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

    return (
        <Editor
            defaultValue={markdown}
            onChange={onChangeWrapper}
            language="markdown"
            theme="vs-dark"
            height="30rem"
        />
    )
}

export default MarkdownEditor