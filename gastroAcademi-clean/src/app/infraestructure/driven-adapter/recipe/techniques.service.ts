import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { TechniquesGetaway } from 'src/app/domain/models/recipe/gateway/techniques-getaway';
import { Techniques } from 'src/app/domain/models/recipe/techniques';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { TechniquesRecipe } from 'src/app/domain/models/recipe/techniques-recipe';

@Injectable({
  providedIn: 'root'
})
export class TechniquesService extends TechniquesGetaway{

  private techniquesCollection: AngularFirestoreCollection<Techniques>
  technique: Observable<Techniques[]>
  
  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) { 
    super();
    this.techniquesCollection = afs.collection<Techniques>('techniques');
    this.technique = this.techniquesCollection.valueChanges();
  }
  getAllTechniques(): Observable<Techniques[]> {
    return this.afs.collection<Techniques>('techniques').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Techniques
        data.id = a.payload.doc.id
        return data
      }))
    )
  }

  getTechniquesById(id: string): Observable<Techniques[]> {
    return this.afs.collection<TechniquesRecipe>('techniques', ref =>ref.where('id','==',id)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Techniques
        data.id = a.payload.doc.id
        return data
      }))
    )
  }
  
}
