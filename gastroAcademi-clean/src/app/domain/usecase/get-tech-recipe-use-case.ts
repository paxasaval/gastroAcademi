import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TechniquesGetaway } from "../models/recipe/gateway/techniques-getaway";
import { TechRecipeGetaway } from "../models/recipe/gateway/techRecipe-getaway";
import { TechniquesRecipe } from "../models/recipe/techniques-recipe";

@Injectable({
    providedIn: 'root'
})

export class GetTechRecipeUseCase{
    constructor(private _techRecipeGetaway: TechRecipeGetaway){}
    getTechRecipeById(id: string): Observable <TechniquesRecipe>{
        return this._techRecipeGetaway.getTechniquesById(id);
    }

    getAllTechRecipe(): Observable <Array<TechniquesRecipe>>{
        return this._techRecipeGetaway.getAllTechRecipe();
    }
}