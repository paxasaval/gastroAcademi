import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IngRecipeGetaway } from "../models/recipe/gateway/ingRecipe-getaway";
import { IngredientsRecipe } from "../models/recipe/ingredients-recipe";

@Injectable({
    providedIn: 'root'
})

export class GetIngRecipeUseCase {
    constructor(private _ingRecipeGetaway: IngRecipeGetaway) { }
    getIngredientsByRecipe(recipe: string): Observable<IngredientsRecipe[]> {
        return this._ingRecipeGetaway.getIngredientsByRecipe(recipe);
    }

    getIngredientsByName(name: string): Observable<IngredientsRecipe[]> {
        return this._ingRecipeGetaway.getIngredientByName(name);
    }

    getIngredientsByIngredient(ingredient: string): Observable<IngredientsRecipe[]>  {
        return this._ingRecipeGetaway.getIngredientsByIngredient(ingredient);
    }

    getAllIngredients(): Observable<IngredientsRecipe[]> {
        return this._ingRecipeGetaway.getAllIngredients();
    }
}
