import { Observable } from "rxjs";
import { Instructions } from "../instructions";

export abstract class  InstructionsGetaway {
    abstract getInstructionsByRecipe(recipe: string): Observable<Instructions>;
    abstract getAllInstructions(): Observable<Array<Instructions>>;
}