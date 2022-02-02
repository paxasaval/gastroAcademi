import { Observable } from "rxjs";
import { Times } from "../times";

export abstract class TimesGetaway {
    abstract getTimesByName(name: string): Observable<Times[]>;
    abstract getTimesByRecipe(recipe: string): Observable<Times[]>;
    abstract getAllTimes(): Observable<Times[]>;
}
