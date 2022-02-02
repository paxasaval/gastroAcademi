import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { TechRecipeGetaway } from 'src/app/domain/models/recipe/gateway/techRecipe-getaway';
import { TechniquesRecipe } from 'src/app/domain/models/recipe/techniques-recipe';

@Injectable({
  providedIn: 'root'
})
export class TechniquesRecipeService extends TechRecipeGetaway {

  private techniquesRecipeCollection: AngularFirestoreCollection<TechniquesRecipe>
  techniqueRecipe: Observable<TechniquesRecipe[]>

  constructor(
    private afs: AngularFirestore
  ) {
    super();
    this.techniquesRecipeCollection = afs.collection<TechniquesRecipe>('techniquesRecipe');
    this.techniqueRecipe = this.techniquesRecipeCollection.valueChanges();
  }
  
  getAllTechRecipe(): Observable<TechniquesRecipe[]> {
    return this.afs.collection<TechniquesRecipe>('techniquesRecipe').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as TechniquesRecipe
        data.id = a.payload.doc.id
        return data
      }))
    )
  }

  getTechniquesById(id: string): Observable<TechniquesRecipe[]> {
    return this.afs.collection<TechniquesRecipe>('techniquesRecipe', ref => ref.where('id', '==', id)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as TechniquesRecipe
        data.id = a.payload.doc.id
        return data
      }))
    )
  }
}
