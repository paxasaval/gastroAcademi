import { Ingredients} from "./ingredients";

export interface IngredientsRecipe {
    ingredient?: string | Ingredients,
    alias?: string,
    recipe?: string,
    measure?: string,
    quantity?: number,
    id?: string
}
