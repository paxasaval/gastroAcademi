import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { TimesGetaway } from 'src/app/domain/models/recipe/gateway/times-getaway';
import { Times } from 'src/app/domain/models/recipe/times';

@Injectable({
  providedIn: 'root'
})
export class TimesService extends TimesGetaway {

  private timesCollection: AngularFirestoreCollection<Times>;
  times_s: Observable<Times[]>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFirestore
  ) { 
    super();
    this.timesCollection = afs.collection<Times>('times');
    this.times_s = this.timesCollection.valueChanges();
  }

  getAllTimes(): Observable<Times[]> {
    return this.afs.collection<Times>('times').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Times
        data.id = a.payload.doc.id
        return data;
      }))
    )
  }

  getTimesByRecipe(recipe: string): Observable<Times[]> {
    return this.afs.collection<Times>('times', ref => ref.where('recipe', '==', recipe)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Times
        data.id = a.payload.doc.id
        return data
      }))
    )
  }

  getTimesByName(name: string): Observable<Times[]> {
    return this.afs.collection<Times>('times', ref => ref.where('name', "==", name)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Times
        data.id = a.payload.doc.id
        return data
      }))
    )
  }
}
