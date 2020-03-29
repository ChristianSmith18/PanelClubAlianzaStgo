import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeDetection, ThemeDetectionResponse } from '@ionic-native/theme-detection/ngx';
import { RoutesDataService } from './services/routes-data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pagesList = [
    {
      id: 'home',
      text: 'Página Principal'
    },
    {
      id: 'about',
      text: '¿Quiénes Somos?'
    },
    {
      id: 'calendar',
      text: 'Calendario'
    },
    {
      id: 'inscription',
      text: 'Inscripción'
    },
    {
      id: 'sponsor',
      text: 'Auspiciadores'
    },
    {
      id: 'gallery',
      text: 'Galería'
    },
    {
      id: 'location',
      text: '¿Dónde nos encontramos?'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private themeDetection: ThemeDetection,
    private menu: MenuController,
    private firestore: RoutesDataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      document.body.classList.add('dark');
      this.themeDetection.isAvailable()
        .then((res) => {
          if (res.value) {
            this.themeDetection.isDarkModeEnabled().then((resp: ThemeDetectionResponse) => {
              if (!resp.value) {
                document.body.classList.remove('dark');
                this.statusBar.styleDefault();
              }
            });
          }
        });

      this.splashScreen.hide();
    });
  }

  closeMenu() {
    this.menu.close('pages');
  }

  changeViewComponent(id: string) {
    this.firestore.setActualPage(id)
      .then(() => {
        this.closeMenu();
      })
      .catch((err) => {
        alert(`Ha ocurrido un error: ${JSON.stringify(err)}`);
      });
  }

}
