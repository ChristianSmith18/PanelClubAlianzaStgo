import { Component } from '@angular/core';
import { ThemeDetection, ThemeDetectionResponse } from '@ionic-native/theme-detection/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  checked = true;
  keyAfterContentChecked = true;

  constructor(
    private themeDetection: ThemeDetection
  ) {
    this.themeDetection.isAvailable()
      .then((res) => {
        if (res.value) {
          this.themeDetection.isDarkModeEnabled().then((resp: ThemeDetectionResponse) => {
            if (!resp.value) {
              this.checked = false;
            }
          });
        }
      });
  }

  setDarkTheme(event: any) {
    if (event.detail.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
