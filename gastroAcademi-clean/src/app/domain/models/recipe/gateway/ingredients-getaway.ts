import { Observable } from "rxjs";
import { Category } from "../category";
import { Ingredients } from "../ingredients";

export abstract class IngredientsGetaway {
    abstract getIngredientsByID(id: string): Observable<Ingredients[]>;
    abstract getAllIngredients(): Observable<Ingredients[]>;
    abstract getIngredientsByCategory(category: string): Observable<Ingredients[]>;
}