

// These can be a single item name, or an array containing a combination of item names
// and name/count hashes
type RecipeJsonList = string | { [name: string]: number }
export interface RecipeJson {
    name: string;
    time: number;
    produces?: RecipeJsonList;
    ingredients?: RecipeJsonList;
    machine: 'Assembler' | 'Blender' | 'Constructor' | 'Foundry' | 'Manual' | 'Manufacturer' | 'Miner' | 'Nuclear Power Plant' | 'Oil Extractor' | 'Packager' | 'Particle Accelerator' | 'Refinery' | 'Smelter'
    isAlternate?: boolean
}

interface RecipeItem {
    name: string;
    count: number;
}
class Recipe {
    _name: string;
    _time: number;
    _produces: RecipeItem[];
    _ingredients: RecipeItem[];


    constructor(
        name: string,
        time: number,
        produces: RecipeItem[],
        ingredients: RecipeItem[]
    ) {
        // Copy variables to private vars
        this._name = name
        this._time = time
        this._produces = produces
        this._ingredients = ingredients
    }

    toString() {
        const producesStr: string = this._produces.map((item) => `${item.count}x ${item.name}`).join(',')
        const ingredientsStr: string = this._ingredients.map((item) => `${item.count}x ${item.name}`).join(',')

        if (!ingredientsStr) {
            return `${this._name}: Produces ${producesStr} in ${this.time}s`
        }
        return `${this._name}: Produces ${producesStr} from ${ingredientsStr} in ${this.time}s`
    }

    get name() {
        return this._name;
    }

    get time() {
        return this._time;
    }

    get products() {
        return this._produces
    }

    get ingredients() {
        return this._ingredients
    }

    static fromJson(json: RecipeJson[]): Recipe[] {
        return json.map((jsonItem) => {
            const name = jsonItem.name
            const time = jsonItem.time

            // If we don't have a 'produces' entry we default to producing 1x 'name'
            const produces: RecipeItem[] = this.jsonListToRecipeList(jsonItem.produces) || [{ name: name, count: 1 }]

            // If we don't have any ingredients we default to not needing any- this is suitable for
            // miners
            const ingredients: RecipeItem[] = this.jsonListToRecipeList(jsonItem.ingredients) || []

            const recipe = new Recipe(name, time, produces, ingredients)
            // console.log("Produced recipe ", recipe.toString(), recipe, " from JSON ", JSON.stringify(json, null, 2))

            return recipe
        })
    }

    private static jsonListToRecipeList(json: RecipeJsonList | undefined): RecipeItem[] | undefined {
        // If there're no items we have nothing to do
        if (json === undefined) {
            return undefined
        }

        // Do we only have a simple string? If so return 1x that item
        if (typeof json === 'string') {
            return [{ name: json, count: 1 }]
        }

        // Process all of the items from the object
        return (
            Object.keys(json)
                .sort()
                .map(
                    (name: string) => { return { name: name, count: json[name] } }
                )
        )
    }
}

export default Recipe