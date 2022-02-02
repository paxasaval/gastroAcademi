import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { IngRecipeGetaway } from 'src/app/domain/models/recipe/gateway/ingRecipe-getaway';
import { Ingredients } from 'src/app/domain/models/recipe/ingredients';
import { IngredientsRecipe } from 'src/app/domain/models/recipe/ingredients-recipe';

@Injectable({
  providedIn: 'root'
})
export class IngRecipeService extends IngRecipeGetaway{
  private ingredientsCollection: AngularFirestoreCollection<Ingredients>;
  ingredients_s: Observable<Ingredients[]>;


  constructor(
    private afs: AngularFirestore,
    private storage: AngularFirestore
  ) {
    super();
    this.ingredientsCollection = afs.collection<Ingredients>('ingredientsRecipe');
    this.ingredients_s = this.ingredientsCollection.valueChanges();
   }

   getAllIngredients(): Observable<IngredientsRecipe[]> {
    return this.afs.collection<IngredientsRecipe>('ingredientsRecipe').snapshotChanges().pipe(
      map(actions => actions.map(a=>{
         const data = a.payload.doc.data() as IngredientsRecipe
         data.id = a.payload.doc.id
         return data
      }))
    )
   }

   getIngredientsByRecipe(recipe: string): Observable<IngredientsRecipe[]> {
    return this.afs.collection<IngredientsRecipe>('ingredientsRecipe', ref=>ref.where('recipe','==',recipe)).snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data = a.payload.doc.data() as IngredientsRecipe
        data.id = a.payload.doc.id
        return data
      }))
    )
   }

   getIngredientByName(name: string): Observable<IngredientsRecipe[]> {
    return this.afs.collection<IngredientsRecipe>('ingredientsRecipe', ref=>ref.where('name','==',name)).snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data = a.payload.doc.data() as IngredientsRecipe
        data.id = a.payload.doc.id
        return data
      }))
    )
   }

   getIngredientsByIngredient(ingredient: string): Observable<IngredientsRecipe[]> {
    return this.afs.collection<IngredientsRecipe>('ingredientsRecipe', ref=>ref.where('ingredient','==',ingredient)).snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data = a.payload.doc.data() as IngredientsRecipe
        data.id = a.payload.doc.id
        return data
      }))
    )
   }
}
