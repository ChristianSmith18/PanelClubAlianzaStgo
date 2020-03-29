import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Portadas, HomeRootData } from '../models/home-data.interface';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  constructor(
    private firestore: AngularFirestore,
    private toastController: ToastController
  ) { }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  setData(portada: Portadas) {
    let portadas: Portadas[];
    const db = this.firestore.collection('rutas').doc('home').valueChanges().subscribe(
      (data: HomeRootData) => {
        portadas = data.portadas;
        portadas.unshift(portada);

        db.unsubscribe();

        const dbSet = this.firestore.collection('rutas').doc('home').set({
          portadas
        }, { merge: true }).then(() => { this.presentToast('Se ha subido con exito!'); })
          .catch((err) => { this.presentToast(`Ha ocurrido un error: ${JSON.stringify(err)}`); });
      }
    );
  }
}
