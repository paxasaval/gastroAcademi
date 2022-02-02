import { Observable } from "rxjs";
import { Recipe } from "../recipe";

export abstract class RecipeGetaway {
    abstract getRecipeByID(id: string): Observable<Recipe>;
    abstract getAllRecipes():Observable<Recipe[]>;
}
