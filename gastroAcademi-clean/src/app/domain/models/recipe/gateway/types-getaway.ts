import { Observable } from "rxjs";
import { Types } from "../types";

export abstract class TypesGetaway {
    abstract getAllTypes(): Observable<Types[]>;
}