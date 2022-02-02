import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Category } from 'src/app/domain/models/recipe/category';
import { CategoryGetaway } from 'src/app/domain/models/recipe/gateway/categorys-getaway';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CategoryGetaway {

  private categoryCollection: AngularFirestoreCollection<Category>;
  categorys: Observable<Category[]>

  constructor(
    private afs: AngularFirestore,

  ) {
    super();
    this.categoryCollection = afs.collection<Category>('category');
    this.categorys = this.categoryCollection.valueChanges();
  }

  getAllCategorys(): Observable<Category[]> {
    return this.afs.collection<Category>('category').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Category
        data.id = a.payload.doc.id
        return data
      }))
    )
  }
}
