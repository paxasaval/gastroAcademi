import { Observable } from "rxjs";
import { Category } from "../category";
import { Ingredients } from "../ingredients";

export abstract class IngredientsGetaway {
    abstract getIngredientsByID(id: string): Observable<Ingredients>;
    abstract getAllIngredients(): Observable<Array<Ingredients>>;
    abstract getIngredientsByCategory(category: string): Observable<Category>;
}