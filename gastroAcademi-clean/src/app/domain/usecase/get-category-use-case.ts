import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/recipe/category";
import { CategoryGetaway } from "../models/recipe/gateway/categorys-getaway";

@Injectable({
    providedIn: 'root'
})

export class GetCategoryUseCase{
    constructor(private _categoryGetaway: CategoryGetaway){}
    getAllCategorys(): Observable<Array<Category>>{
        return this._categoryGetaway.getAllCategorys();
    }
}