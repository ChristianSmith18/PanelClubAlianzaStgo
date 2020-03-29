import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RoutesDataService } from '../services/routes-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  home = true;
  about = false;
  calendar = false;
  inscription = false;
  sponsor = false;
  gallery = false;
  location = false;

  constructor(
    private menu: MenuController,
    private firestore: RoutesDataService
  ) {
    /**
     * Aquí irá el código para conectarme a
     * firebase y ver cual es la página seleccionada
     */

    this.firestore.getActualPage().subscribe(
      (data: any) => {
        switch (data.page) {
          case 'home':
            this.home = true;
            this.about = false;
            this.calendar = false;
            this.inscription = false;
            this.sponsor = false;
            this.gallery = false;
            this.location = false;
            break;
          case 'about':
            this.home = false;
            this.about = true;
            this.calendar = false;
            this.inscription = false;
            this.sponsor = false;
            this.gallery = false;
            this.location = false;
            break;
          case 'calendar':
            this.home = false;
            this.about = false;
            this.calendar = true;
            this.inscription = false;
            this.sponsor = false;
            this.gallery = false;
            this.location = false;
            break;
          case 'inscription':
            this.home = false;
            this.about = false;
            this.calendar = false;
            this.inscription = true;
            this.sponsor = false;
            this.gallery = false;
            this.location = false;
            break;
          case 'sponsor':
            this.home = false;
            this.about = false;
            this.calendar = false;
            this.inscription = false;
            this.sponsor = true;
            this.gallery = false;
            this.location = false;
            break;
          case 'gallery':
            this.home = false;
            this.about = false;
            this.calendar = false;
            this.inscription = false;
            this.sponsor = false;
            this.gallery = true;
            this.location = false;
            break;
          case 'location':
            this.home = false;
            this.about = false;
            this.calendar = false;
            this.inscription = false;
            this.sponsor = false;
            this.gallery = false;
            this.location = true;
            break;
          default:
            this.home = true;
            this.about = false;
            this.calendar = false;
            this.inscription = false;
            this.sponsor = false;
            this.gallery = false;
            this.location = false;
            break;
        }
      }
    );
  }

  openMenu() {
    this.menu.open('pages');
  }
}
