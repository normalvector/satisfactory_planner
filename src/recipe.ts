// These can be a single item name, or an array containing a combination of item names
// and name/count hashes
type RecipeJsonList = string | { [name: string]: number }
export interface RecipeJson {
    name: string;
    time: number;
    products?: RecipeJsonList;
    ingredients?: RecipeJsonList;
    machine: string, // Not limiting this in order to allow new machines to be declared
    isAlternate?: boolean
}

interface RecipeItem {
    name: string;
    count: number;
}
class Recipe {
    _name: string;
    _products: RecipeItem[];
    _ingredients: RecipeItem[];
    _time: number;
    _machine: string; // Not limiting this in order to allow new machines to be declared
    _isAlternate: boolean;

    constructor(
        name: string,
        products: RecipeItem[],
        ingredients: RecipeItem[],
        time: number,
        machine: string,
        isAlternate: boolean
    ) {
        // Copy variables to private vars
        this._name = name
        this._products = products
        this._ingredients = ingredients
        this._time = time
        this._machine = machine
        this._isAlternate = isAlternate
    }

    toString() {
        const productStr: string = this._products.map((item) => `${item.count}x ${item.name}`).join(',')
        const ingredientsStr: string = this._ingredients.map((item) => `${item.count}x ${item.name}`).join(',')

        const nameStr = `${this.name}${this._isAlternate ? ' (ALTERNATE)' : ''}`
        const prodStr = `on ${this._machine} in ${this._time}s`
        if (!ingredientsStr) {
            return `${nameStr}: Products ${productStr} in ${prodStr}`
        }
        return `${nameStr}: Produces ${productStr} from ${ingredientsStr} in ${prodStr}`
    }

    get name() {
        return this._name;
    }

    get products() {
        return this._products
    }

    get ingredients() {
        return this._ingredients
    }

    get time() {
        return this._time;
    }

    get machine() {
        return this._machine
    }

    get isAlternate() {
        return this._isAlternate
    }

    static fromJson(jsonStr: string): Recipe[] {
        const json: RecipeJson[] = JSON.parse(jsonStr)
        return json.map((jsonItem) => {
            const name = jsonItem.name
            const time = jsonItem.time
            const machine = jsonItem.machine
            const isAlternate: boolean = jsonItem.isAlternate || false

            // If we don't have a 'products' entry we default to producing 1x 'name'
            const products: RecipeItem[] = this.jsonListToRecipeList(jsonItem.products) || [{ name: name, count: 1 }]

            // If we don't have any ingredients we default to not needing any- this is suitable for
            // miners
            const ingredients: RecipeItem[] = this.jsonListToRecipeList(jsonItem.ingredients) || []

            // Build the actual recipe now
            const recipe = new Recipe(name, products, ingredients, time, machine, isAlternate)

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
