import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TypesGetaway } from "../models/recipe/gateway/types-getaway";
import { Types } from "../models/recipe/types";

@Injectable({
    providedIn: 'root'
})

export class GetTypesUseCase{
    constructor(private _typesGetaway: TypesGetaway){}
    getAllTypes():Observable<Array<Types>>{
        return this._typesGetaway.getAllTypes();
    }
}