import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RecipeGetaway } from 'src/app/domain/models/recipe/gateway/recipe-getaway';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Recipe } from 'src/app/domain/models/recipe/recipe';

@Injectable({
  providedIn: 'root'
})

export class RecipeService extends RecipeGetaway {

  private recipeCollection: AngularFirestoreCollection<Recipe>;
  recipes: Observable<Recipe[]>;

  constructor(
    private afs: AngularFirestore,
  ) {
    super();
    this.recipeCollection = afs.collection<Recipe>('recipes');
    this.recipes = this.recipeCollection.snapshotChanges().pipe(
      map(actions=>actions.map(a=>{
        const data = a.payload.doc.data() as Recipe
        data.id = a.payload.doc.id
        return data
      }))
    );
   }
   getAllRecipes(): Observable<Recipe[]> {
       return this.recipes
   }

   getRecipeByID(id: string): Observable<Recipe> {
       return this.afs.doc<Recipe>(`recipes/${id}`).snapshotChanges().pipe(
        map(a => {
          const data = a.payload.data() as Recipe
          data.id = a.payload.id
          //console.log(data)
          return data
        }))
   }
}
