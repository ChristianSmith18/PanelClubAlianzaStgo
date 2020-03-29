import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import 'firebase/storage';
import { Observable } from 'rxjs';
import { HomeDataService } from 'src/app/services/home-data.service';
import { AlertController } from '@ionic/angular';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  imgURL: string | ArrayBuffer;
  imgData: any;
  uploadPercent: Observable<number>;
  downloadURL: Observable<number>;
  // imgDownloadUrl;

  tituloPortada: string;
  subtituloPortada: string;


  constructor(
    private storage: AngularFireStorage,
    private home: HomeDataService,
    private alertController: AlertController
  ) { }

  previewImg(files) {
    if (files.length === 0) {
      return;
    }


    this.imgData = files[0];

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.imgURL = reader.result;
      document.getElementById('imgPreview').classList.remove('margin-fix');
      document.getElementById('imgPreview').classList.add('border-img');
    };
  }

  async uploadFile() {
    if (isNullOrUndefined(this.imgData)) {
      this.presentAlert('No has ingresado la imagen de la portada.');
      return;
    }

    if (isNullOrUndefined(this.tituloPortada) || this.tituloPortada.length === 0) {
      this.presentAlert('No has ingresado el título para la portada.');
      return;
    }

    if (isNullOrUndefined(this.subtituloPortada) || this.subtituloPortada.length === 0) {
      this.presentAlert('No has ingresado el subtítulo para la portada.');
      return;
    }

    const alert = await this.alertController.create({
      header: '¿Estás seguro?',
      message: 'Una vez subida la información ya no se puede volver a editar.',
      mode: 'ios',
      buttons: [
        {
          text: 'Continuar',
          cssClass: 'send-text',
          handler: () => {
            const filePath = new Date().valueOf().toString();
            const task = this.storage.upload(`img/home/${filePath}`, this.imgData).then(
              () => {
                const fileRef = this.storage.ref(`/img/home/${filePath}`).getDownloadURL().subscribe(
                  (urlHref) => {
                    this.home.setData(
                      {
                        id: filePath,
                        titulo: this.tituloPortada,
                        subtitulo: this.subtituloPortada,
                        url: urlHref,
                        fecha: new Date().toDateString()
                      }
                    );
                  }
                );
              }
            );

          }
        },
        {
          text: 'Cerrar',
          role: 'cancel',
          cssClass: 'cancel-text',
        }
      ]
    });

    await alert.present();
  }

  setTitle() {
    this.tituloPortada = (document.getElementsByTagName('ion-input')[0].children[0] as HTMLInputElement).value;
  }

  setSubtitle() {
    this.subtituloPortada = (document.getElementsByTagName('ion-input')[1].children[0] as HTMLInputElement).value;
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Datos erróneos',
      message: msg,
      mode: 'ios',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
          cssClass: 'cancel-text',
        },
      ]
    });

    await alert.present();
  }

  async clearAll() {
    const alert = await this.alertController.create({
      header: '¿Estás seguro?',
      mode: 'ios',
      buttons: [
        {
          text: 'Limpiar',
          cssClass: 'send-text',
          handler: () => {
            (document.getElementsByTagName('ion-input')[0].children[0] as HTMLInputElement).value = '';
            (document.getElementsByTagName('ion-input')[1].children[0] as HTMLInputElement).value = '';
            document.getElementById('imgPreview').classList.add('margin-fix');
            document.getElementById('imgPreview').classList.remove('border-img');
            this.imgURL = undefined;
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'cancel-text',
        }
      ]
    });

    await alert.present();
  }
}
