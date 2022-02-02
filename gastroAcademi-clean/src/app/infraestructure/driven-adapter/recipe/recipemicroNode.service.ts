import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { RecipeGetaway } from 'src/app/domain/models/recipe/gateway/recipe-getaway';
import { Recipe } from 'src/app/domain/models/recipe/recipe';

@Injectable({
  providedIn: 'root'
})
export  class RecipemicroNodeService extends RecipeGetaway {

  private _url = 'http://localhost:8080/recipe?id=2J4PtygyXP45RTLgAjKX';
  constructor(private http: HttpClient) {super();}
  getAllRecipes(): Observable<Recipe[]> {
      return this.http.get<Recipe[]>(this._url)
  }
  getRecipeByID(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(this._url)
  }

}
