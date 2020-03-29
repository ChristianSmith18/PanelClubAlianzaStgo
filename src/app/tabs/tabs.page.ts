import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild(IonTabs, { static: true }) tabs: IonTabs;
  tab1 = true;
  tab2 = false;

  constructor() { }

  changeSelectedTab() {
    const tabSelected = this.tabs.getSelected();

    switch (tabSelected) {
      case 'tab1':
        this.tab1 = true;
        this.tab2 = false;
        break;
      case 'tab2':
        this.tab1 = false;
        this.tab2 = true;
        break;
      default:
        this.tab1 = true;
        this.tab2 = false;
        break;
    }
  }
}
