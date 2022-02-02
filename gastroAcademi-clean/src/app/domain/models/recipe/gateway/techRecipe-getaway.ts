import { Observable } from "rxjs";
import { TechniquesRecipe } from "../techniques-recipe";

export abstract class TechRecipeGetaway {
    abstract getTechniquesById(id: string): Observable <TechniquesRecipe[]>;
    abstract getAllTechRecipe(): Observable<TechniquesRecipe[]>;
}