import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class RoutesDataService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getActualPage() {
    return this.firestore.collection('rutas').doc('paginaActual').valueChanges();
  }

  setActualPage(page: string) {
    return this.firestore.collection('rutas').doc('paginaActual').set({
      page
    });
  }
}
