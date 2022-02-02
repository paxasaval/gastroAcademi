import { Observable } from "rxjs";
import { Techniques } from "../techniques";

export abstract class TechniquesGetaway {
    abstract getTechniquesById(id: string): Observable<Techniques[]>;
    abstract getAllTechniques(): Observable<Techniques[]>;
}