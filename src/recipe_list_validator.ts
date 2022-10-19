import Recipe from './recipe'

type RecipeValidationReport = {
    duplicateRecipeNames: string[],
    products: string[]
    ingredients: string[],
    unproducedIngredients: string[]
}

class RecipeListValidator {
    static validateRecipes(recipes: Recipe[]): RecipeValidationReport {
        const productsSet = this.allProducts(recipes)
        const ingredientsSet = this.allIngredients(recipes)
        const unproducedIngredientsSet = this.setDifference(ingredientsSet, productsSet)

        return {
            duplicateRecipeNames: this.findDuplicateRecipeNames(recipes),

            products: Array.from(productsSet).sort(),
            ingredients: Array.from(ingredientsSet).sort(),
            unproducedIngredients: Array.from(unproducedIngredientsSet).sort()
        }
    }

    static validateRecipesToConsole(recipes: Recipe[]): void {
        console.log("*** VALIDATING RECIPES")
        const report = RecipeListValidator.validateRecipes(recipes);

        if (report.duplicateRecipeNames.length > 0) {
            console.error("Duplicate recipe names: ", report.duplicateRecipeNames)
        } else {
            console.log("No duplicate recipe names found")
        }

        if (report.unproducedIngredients.length > 0) {
            console.error("Unproduced ingredients: ", report.unproducedIngredients)
        } else {
            console.log("No produced ingredients found")
        }

        console.log("Products: ", report.products)
        console.log("Ingredients: ", report.ingredients)
    }

    static findDuplicateRecipeNames(recipes: Recipe[]): string[] {
        const duplicateRecipeNames: string[] = []
        const namesSeen = new Set()

        for (const recipe of recipes) {
            if (namesSeen.has(recipe.name)) {
                duplicateRecipeNames.push(recipe.name)
            }
            namesSeen.add(recipe.name)
        }

        return duplicateRecipeNames.sort()
    }

    static allProducts(recipes: Recipe[]): Set<string> {
        const products = new Set<string>()

        for (const recipe of recipes) {
            for (const product of recipe.ingredients) {
                products.add(product.name)
            }
        }

        return products
    }

    static allIngredients(recipes: Recipe[]): Set<string> {
        const ingredients = new Set<string>()

        for (const recipe of recipes) {
            for (const ingredient of recipe.ingredients) {
                ingredients.add(ingredient.name)
            }
        }
        return ingredients
    }

    private static setDifference(a: Set<string>, b: Set<string>) {
        return new Set(
            [...a].filter(x => !b.has(x))
        )
    }
    private static stringSetToArray(set: Set<string>): string[] {
        return Array.from(set).sort()
    }
}

export default RecipeListValidator

export { RecipeValidationReport }