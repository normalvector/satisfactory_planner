import * as React from 'react'
import MarkdownEditor from './markdown_editor'
import MarkdownRenderer from './markdown_renderer'
import RecipeEditor from './recipe_editor'
import { Tab, Tabs } from '@blueprintjs/core'
import * as SampleMarkdown from '../sample_markdown'
import useLocalStorage from "use-local-storage";
import Recipe from '../recipe'
import { StandardRecipeJson } from '../standard_recipes'
import MainNavbar from './main_navbar'
import RecipeValidationReport from '../recipe_list_validator'

import * as css from '../css/_main.scss'

// Copy the CSS object so that it's not pruned..
// @ts-ignore This is a weird edge case
// eslint-disable-next-line
var processCss = css;


function SatisfactoryPlanner(): React.ReactElement {
    //const [markdown, setMarkdown] = React.useState<string>(SampleMarkdown.basic_ingredients);
    const [markdown, setMarkdown] = useLocalStorage('markdown', SampleMarkdown.basic_ingredients)

    //const [recipeJson, setRecipeJson] = React.useState<string>(JSON.stringify(StandardRecipeJson, null, 2))
    const [recipeJson, setRecipeJson] = useLocalStorage('recipeJson', JSON.stringify(StandardRecipeJson, null, 2))

    //const [recipes, setRecipes] = React.useState<Recipe[]|undefined>(undefined)
    const [recipes, setRecipes] = useLocalStorage('recipes', Recipe.fromJson(StandardRecipeJson))

    // Set Recipes when we load
    React.useEffect(() => {
        // Your code here
        console.log("Loading recipes")
        //setRecipes(Recipe.fromJson(JSON.parse(recipeJson))
        onRecipeChange(recipeJson)
    }, []);

    //const [recipes, setRecipes] = useLocalStorage<Recipe[]>('recipes', Recipe.fromJson(StandardRecipeJson))
    const onMarkdownChange = (md: string) => {
        setMarkdown(md)
    }
    const onRecipeChange = (recipeJson: string | undefined) => {
        recipeJson ||= ''

        setRecipeJson(recipeJson)
        //console.log("New recipes: ", recipeJson)

        try {
            const recipeData = JSON.parse(recipeJson)
            //console.log("RD: ", recipeData)
            const recipes = Recipe.fromJson(recipeData)
            RecipeValidationReport.validateRecipesToConsole(recipes)

            setRecipes(recipes)
        } catch (e: any) {
            // This is expected- the user will be entering a lot
            // of broken JSON
            // console.log("Parse error: ", e)
        }

    }
    const onRecipeReset = () => {
        onRecipeChange(JSON.stringify(StandardRecipeJson))
    }

    return (
        <div>
            <MainNavbar />
            <Tabs>
                <Tab id="edit" title="Edit"
                    panel={
                        <div>
                            <MarkdownEditor markdown={markdown} onChange={onMarkdownChange} />
                        </div>
                    } />
                <Tab id="review" title="Review" panel={
                    <MarkdownRenderer markdown={markdown} recipes={recipes} />
                } />
                <Tab id="recipes" title="Recipes" panel={
                    <RecipeEditor recipeJson={recipeJson} onChange={onRecipeChange} onReset={onRecipeReset} />
                } />
            </Tabs>
        </div >
    )
}

export default SatisfactoryPlanner