import * as React from 'react'
import MarkdownEditor from './markdown_editor'
import MarkdownRenderer from './markdown_renderer'
import RecipeEditor from './recipe_editor'
import { Tab, Tabs } from '@blueprintjs/core'
import * as SampleMarkdown from '../sample_markdown'
import useLocalStorage from "use-local-storage";
import Recipe from '../recipe'
import { StandardRecipeJson } from '../standard_recipes'
import * as css from '../css/_main.scss'

// Copy the CSS object so that it's not pruned..
// @ts-ignore This is a weird edge case
// eslint-disable-next-line
var processCss = css;


function SatisfactoryPlanner(): React.ReactElement {
    const [markdown, setMarkdown] = React.useState<string>(SampleMarkdown.basic_ingredients);
    //const [markdown, setMarkdown] = useLocalStorage('markdown', initialMarkdown)
    const [recipes, setRecipes] = React.useState<Recipe[]>(Recipe.fromJson(StandardRecipeJson))
    //const [recipes, setRecipes] = useLocalStorage<Recipe[]>('recipes', Recipe.fromJson(StandardRecipeJson))

    const onMarkdownChange = (md: string) => {
        setMarkdown(md)
    }
    const onRecipeChange = (recipes: Recipe[]) => {
        setRecipes(recipes)
        console.log("New recipes: ", recipes)
    }
    const onRecipeReset = () => {
        setRecipes(Recipe.fromJson(StandardRecipeJson))
    }

    return (
        <div>
            <h1>Satisfactory Planner TANS</h1>
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
                    <RecipeEditor recipes={recipes} onChange={onRecipeChange} onReset={onRecipeReset} />
                } />
            </Tabs>
        </div >
    )
}

export default SatisfactoryPlanner