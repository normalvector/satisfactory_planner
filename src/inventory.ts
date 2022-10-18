import Recipe from "./Recipe"

class Inventory {
    // This is the main store- {'Iron Ingot': 23, 'Iron Ore': 500}
    private _contents: { [name: string]: number } = {}

    itemNames(): string[] {
        return Object.keys(this._contents)
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

    applyRecipe(recipe: Recipe, count: number = 1, prioritySourceInventory?: Inventory): string {
        console.log(`Applying ${count}x ${recipe.name}`)

        // Remove all of the ingredients
        for (const ingredient of recipe.ingredients) {
            const name = ingredient.name
            var remainingCount = ingredient.count * count

            // Take as many as possible from priority source
            if (prioritySourceInventory) {
                const countFromPrioritySource = Math.max(
                    remainingCount,
                    prioritySourceInventory.getCount(name) || 0
                )
                prioritySourceInventory.removeItem(name, countFromPrioritySource)
                remainingCount -= countFromPrioritySource
            }

            this.removeItem(ingredient.name, remainingCount)
        }

        // Add all of the produced items
        for (const product of recipe.produces) {
            this.addItem(product.name, product.count * count)
        }

        var ingredientsMsg = recipe.ingredients.map((ingredient) => {
            const totalCount = ingredient.count * count
            const name = ingredient.name
            const remaining: number = this.getCount(name)
            return `${totalCount}x ${name} with ${remaining} remaining`
        }).join(', ')
        var productMsg = recipe.produces.map((product) => {
            const totalCount = product.count * count
            const name = product.name
            const remaining: number = this.getCount(name)
            return `${totalCount}x ${name} for ${remaining} total`
        }).join(', ')
        var message = `${count >= 0 ? '+' : ''}${count}x ${recipe.name} (Using ${ingredientsMsg}, to produce ${productMsg})`

        return message
    }
}

export default Inventory