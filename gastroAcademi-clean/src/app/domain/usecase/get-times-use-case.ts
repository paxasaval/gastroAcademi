import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TimesGetaway } from "../models/recipe/gateway/times-getaway";
import { Times } from "../models/recipe/times";

@Injectable({
    providedIn: 'root'
})

export class GetTimesUseCase{
    constructor(private _timesGetaway: TimesGetaway){}
    getTimesByName(name: string):Observable<Times[]>{
        return this._timesGetaway.getTimesByName(name);
    }

    getTimesByRecipe(recipe: string): Observable<Times[]>{
        return this._timesGetaway.getTimesByRecipe(recipe)
    }

    getAllTimes(): Observable <Times[]>{
        return this._timesGetaway.getAllTimes();
    }
}
