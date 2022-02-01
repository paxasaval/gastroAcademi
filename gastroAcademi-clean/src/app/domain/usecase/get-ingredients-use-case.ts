import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IngredientsGetaway } from "../models/recipe/gateway/ingredients-getaway";
import { Ingredients } from "../models/recipe/ingredients";

@Injectable({
    providedIn: 'root'
})

export class GetIngredientsUseCase {
    constructor(private _ingredientsGetaway: IngredientsGetaway) { }
    getIngredientsById(id: string): Observable<Ingredients> {
        return this._ingredientsGetaway.getIngredientsByID(id);
    }

    getAllIngredients(): Observable<Array<Ingredients>> {
        return this._ingredientsGetaway.getAllIngredients();
    }

    getIngredientByCategory(category: string) {
        return this._ingredientsGetaway.getIngredientsByCategory(category);
    }
}