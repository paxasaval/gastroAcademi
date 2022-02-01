import { Observable } from "rxjs";
import { Category } from "../category";

export abstract class CategoryGetaway {
    abstract getAllCategorys():Observable<Array<Category>>;
}