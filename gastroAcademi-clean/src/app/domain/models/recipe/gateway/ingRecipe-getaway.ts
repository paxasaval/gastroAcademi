import { Observable } from "rxjs";
import { Ingredients } from "../ingredients";
import { IngredientsRecipe } from "../ingredients-recipe";
import { Recipe } from "../recipe";

export abstract class IngRecipeGetaway {
    abstract getIngredientsByRecipe(recipe: string): Observable<IngredientsRecipe[]>;
    abstract getIngredientByName(name: string): Observable<IngredientsRecipe[]>;
    abstract getIngredientsByIngredient(ingredient: string): Observable<IngredientsRecipe[]>;
    abstract getAllIngredients(): Observable<IngredientsRecipe[]>;
}