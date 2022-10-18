import { RecipeJson } from "./recipe"
import Recipe from './recipe'

const StandardRecipeJson: RecipeJson[] = [
    {
        name: 'Iron Ore'
    },
    {
        name: 'Iron Ingot',
        ingredients: 'Iron Ore'
    },
    {
        name: 'Iron Plate',
        produces: { 'Iron Plate': 2 },
        ingredients: { 'Iron Ingot': 3 }
    },
    {
        name: 'Iron Rod',
        ingredients: 'Iron Ingot'
    },
    {
        name: 'Screw',
        produces: { 'Screw': 4 },
        ingredients: 'Iron Rod'
    },
    {
        name: 'Rotor',
        ingredients: {
            'Iron Rod': 5,
            'Screw': 25
        }
    },
    {
        name: 'Reinforced Iron Plate',
        ingredients: {
            'Iron Plate': 6,
            'Screw': 12
        }
    },
    {
        name: 'Modular Frame',
        ingredients: {
            'Reinforced Iron Plate': 3,
            'Iron Rod': 12
        }
    }
]

export {
    //    StandardRecipes,
    StandardRecipeJson
}