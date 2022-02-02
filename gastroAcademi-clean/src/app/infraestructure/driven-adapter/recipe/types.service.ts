import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { TypesGetaway } from 'src/app/domain/models/recipe/gateway/types-getaway';
import { Types } from 'src/app/domain/models/recipe/types';

@Injectable({
  providedIn: 'root'
})
export class TypesService extends TypesGetaway {

  private typeCollection: AngularFirestoreCollection<Types>
  types: Observable<Types[]>

  constructor(
    private afs: AngularFirestore
  ) {
    super();
    this.typeCollection = afs.collection<Types>('types')
    this.types = this.typeCollection.valueChanges();
  }

  getAllTypes(): Observable<Types[]> {
    return this.afs.collection<Types>('types').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Types
        data.id = a.payload.doc.id
        return data
      }))
    )
  }
}
