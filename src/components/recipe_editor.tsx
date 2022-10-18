import * as React from 'react'
import Editor from '@monaco-editor/react'
import { Button } from '@blueprintjs/core'
import Recipe from '../recipe'

interface RecipeEditorProps {
    recipeJson?: string,
    onChange: (json: string | undefined) => void,
    onReset?: () => void
}

function RecipeEditor(props: RecipeEditorProps): React.ReactElement {
    const { recipeJson, onChange, onReset } = props

    console.log("RECIPES: ", recipeJson)

    function onResetWrapper(e: React.MouseEvent<HTMLElement>) {
        onReset && onReset()
    }

    return (
        <div>
            <h1>Recipe Editor</h1>
            <Editor
                defaultValue={recipeJson}
                onChange={onChange}
                language="json"
                theme="vs-dark"
                height='30rem'
            />
            <Button icon="refresh" intent="danger" text="Reset Recipes" onClick={onReset} />
        </div>
    )
}

export default RecipeEditor