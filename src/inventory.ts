import Recipe from "./Recipe"

class Inventory {
    // This is the main store- {'Iron Ingot': 23, 'Iron Ore': 500}
    private _contents: { [name: string]: number } = {}

    itemNames(): string[] {
        return Object.keys(this._contents).sort()
    }

    clear() {
        this._contents = {}
    }

    addItem(name: string, count: number = 1) {
        this._contents[name] = this.getCount(name) + count
    }

    removeItem(name: string, count: number = 1) {
        this.addItem(name, -count)
    }

    getCount(name: string): number {
        return (this._contents[name] || 0)
    }

    applyRecipe(recipe: Recipe, count: number = 1, sources?: Inventory[]): string {
        console.log(`Applying ${count}x ${recipe.name}`)

        const time = recipe.time
        const recipesPerMinute = 60.0 / time

        console.log("RECIPE TIME: ", time, recipesPerMinute)
        // If a source isn't provided assume it's us
        sources ||= [this]

        // Remove all of the ingredients
        for (const ingredient of recipe.ingredients) {
            const name = ingredient.name
            var remainingCount = ingredient.count * count * recipesPerMinute

            // Take as many as possible from each source in order 
            for (const source of sources) {
                const countFromSource = Math.min(
                    remainingCount,
                    source.getCount(name) || 0
                )
                source.removeItem(name, countFromSource)
                remainingCount -= countFromSource
            }

            // Take the remainder from the final source even if it goes negative
            sources[sources.length - 1].removeItem(name, remainingCount)

            this.removeItem(ingredient.name, remainingCount)
        }

        // Add all of the produced items
        for (const product of recipe.produces) {
            const countPerMinute = product.count * count * recipesPerMinute
            this.addItem(product.name, countPerMinute)
        }

        var ingredientsMsg = recipe.ingredients.map((ingredient) => {
            const totalCount = ingredient.count * count * recipesPerMinute
            const name = ingredient.name
            const remaining: number = this.getCount(name)
            return `${totalCount}x ${name}`
            //return `${totalCount}x ${name} with ${remaining} remaining`
        }).join(', ')
        var productMsg = recipe.produces.map((product) => {
            const totalCount = product.count * count * recipesPerMinute
            const name = product.name
            const remaining: number = this.getCount(name)
            return `${totalCount}x ${name} for ${remaining} total`
        }).join(', ')

        // The message changes slightly based on if we're using ingredients
        var message =
            ingredientsMsg ?
                `${count >= 0 ? '+' : ''}${count}x ${recipe.name} (Using ${ingredientsMsg} to produce ${productMsg})` :
                `${count >= 0 ? '+' : ''}${count}x ${recipe.name} (Producing ${productMsg})`

        return message
    }
}

export default Inventory