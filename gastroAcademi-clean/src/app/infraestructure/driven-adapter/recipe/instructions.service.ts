import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { InstructionsGetaway } from 'src/app/domain/models/recipe/gateway/instructions-getaway';
import { Instructions } from 'src/app/domain/models/recipe/instructions';

@Injectable({
  providedIn: 'root'
})
export class InstructionsService extends InstructionsGetaway{

  private instructionsCollection: AngularFirestoreCollection<Instructions>;
  instructions_s: Observable<Instructions[]>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFirestore
  ) { 
    super();
    this.instructionsCollection = afs.collection<Instructions>('instructions');
    this.instructions_s = this.instructionsCollection.valueChanges();
  }

  getAllInstructions(): Observable<Instructions[]> {
    return this.afs.collection<Instructions>('instructions', ref => ref.orderBy('recipe','desc')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Instructions
        data.id = a.payload.doc.id;
        return data
      }))
    )
  }
  
  getInstructionsByRecipe(recipe: string): Observable<Instructions[]> {
    return this.afs.collection<Instructions>('instructions', ref => ref.where('recipe', '==', recipe)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Instructions
        data.id = a.payload.doc.id
        return data
      }))
    )
  }
}
