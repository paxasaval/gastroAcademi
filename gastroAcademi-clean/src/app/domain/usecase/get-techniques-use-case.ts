import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TechniquesGetaway } from "../models/recipe/gateway/techniques-getaway";
import { Techniques } from "../models/recipe/techniques";

@Injectable({
    providedIn: 'root'
})

export class GetTechniquesUseCase{
    constructor(private _techniquesGetaway: TechniquesGetaway){}
    getTechniquesById(id: string): Observable <Techniques>{
        return this._techniquesGetaway.getTechniquesById(id);
    }

    getAllTechniques(): Observable <Array<Techniques>>{
        return this._techniquesGetaway.getAllTechniques();
    }
}