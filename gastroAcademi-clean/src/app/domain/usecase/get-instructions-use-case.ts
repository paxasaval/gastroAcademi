import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { InstructionsGetaway } from "../models/recipe/gateway/instructions-getaway";
import { Instructions } from "../models/recipe/instructions";

@Injectable({
    providedIn: 'root'
})

export class GetInstructionsUseCase{
    constructor(private _instructionsGetaway: InstructionsGetaway){}
    getInstructionsByRecipe(recipe:string): Observable<Instructions>{
        return this._instructionsGetaway.getInstructionsByRecipe(recipe);
    }

    getAllInstructions(): Observable<Array<Instructions>>{
        return this._instructionsGetaway.getAllInstructions();
    }
}