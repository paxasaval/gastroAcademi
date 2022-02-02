import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Category } from 'src/app/domain/models/recipe/category';
import { IngredientsGetaway } from 'src/app/domain/models/recipe/gateway/ingredients-getaway';
import { Ingredients } from 'src/app/domain/models/recipe/ingredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientService extends IngredientsGetaway {

  private ingredientCollection: AngularFirestoreCollection<Ingredients>
  ingredient: Observable<Ingredients[]>
  constructor(
    private afs: AngularFirestore
  ) {
    super();
    this.ingredientCollection = afs.collection<Ingredients>('ingredient');
    this.ingredient = this.ingredientCollection.valueChanges();
  }
  getAllIngredients(): Observable<Ingredients[]> {
    return this.afs.collection<Ingredients>('ingredient').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Ingredients
        data.id = a.payload.doc.id
        return data
      }))
    )
  }

  getIngredientsByID(id: string): Observable<Ingredients[]> {
    return this.afs.collection<Ingredients>('ingredient', ref => ref.where('id', '==', id)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Ingredients
        data.id = a.payload.doc.id
        return data
      }))
    )
  }

  getIngredientsByCategory(category: string): Observable<Ingredients[]> {
    return this.afs.collection<Ingredients>('ingredient', ref => ref.where('category', '==', category)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Ingredients
        data.id = a.payload.doc.id
        return data
      }))
    )
  }
}
