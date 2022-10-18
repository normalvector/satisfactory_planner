import * as React from 'react'
import Editor from '@monaco-editor/react'
import { Button } from '@blueprintjs/core'
import Recipe from '../recipe'

interface RecipeEditorProps {
    recipes?: Recipe[],
    onChange: (recipes: Recipe[]) => void,
    onReset?: () => void
}

function RecipeEditor(props: RecipeEditorProps): React.ReactElement {
    const { recipes, onChange, onReset } = props


    console.log("RECIPES: ", recipes)

    // Provide an empty string instead of an undefined
    function onChangeWrapper(jsonString: string | undefined) {
        console.log("RECIPE JSON: ", jsonString)
        const recipeJson = JSON.parse(jsonString || '')
        console.log("NEW RECIPE JSON: ", recipeJson)

        if (!Array.isArray(recipeJson)) {
            console.error("Recipe JSON needs to be an : ", typeof (recipeJson))
            return
        }

        const recipes: Recipe[] = Recipe.fromJson(recipeJson)
        console.log("RECIPES: ", recipes)

        onChange(recipes)
    }
    function onResetWrapper(e: React.MouseEvent<HTMLElement>) {
        onReset && onReset()
    }

    const recipeJson = JSON.stringify(recipes, null, 2)

    return (
        <div>
            <h1>Recipe Editor</h1>
            <Editor
                defaultValue={recipeJson}
                onChange={onChangeWrapper}
                language="json"
                theme="vs-dark"
                height='30rem'
            />
            <Button icon="refresh" intent="danger" text="Reset Recipes" onClick={onReset} />
        </div>
    )
}

export default RecipeEditor