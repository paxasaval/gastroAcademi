import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RecipeGetaway } from "../models/recipe/gateway/recipe-getaway";
import { Recipe } from "../models/recipe/recipe";

@Injectable({
    providedIn: 'root'
})

export class GetRecipeUseCases {
    constructor(private _recipeGetaWay: RecipeGetaway) {}
    /* Receta */
    getRecipeById(id: string): Observable <Recipe> {
        return this._recipeGetaWay.getRecipeByID(id);
    }
    getAllRecipe () : Observable <Recipe[]> {
        return this._recipeGetaWay.getAllRecipes();
    }
}
