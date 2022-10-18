import { RecipeJson } from "./recipe"
import Recipe from './recipe'

const StandardRecipeJson: RecipeJson[] = [
    {
        name: 'Iron Ore',
        time: 60
    },
    {
        name: 'Iron Ingot',
        ingredients: 'Iron Ore',
        time: 2
    },
    {
        name: 'Iron Plate',
        produces: { 'Iron Plate': 2 },
        ingredients: { 'Iron Ingot': 3 },
        time: 6
    },
    {
        name: 'Iron Rod',
        ingredients: 'Iron Ingot',
        time: 4
    },
    {
        name: 'Screw',
        produces: { 'Screw': 4 },
        ingredients: 'Iron Rod',
        time: 6
    },
    {
        name: 'Rotor',
        ingredients: {
            'Iron Rod': 5,
            'Screw': 25
        },
        time: 15
    },
    {
        name: 'Reinforced Iron Plate',
        ingredients: {
            'Iron Plate': 6,
            'Screw': 12
        },
        time: 12
    },
    {
        name: 'Modular Frame',
        ingredients: {
            'Reinforced Iron Plate': 3,
            'Iron Rod': 12
        },
        time: 60
    }
]

export {
    //    StandardRecipes,
    StandardRecipeJson
}