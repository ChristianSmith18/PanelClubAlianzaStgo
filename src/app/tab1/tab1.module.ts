import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { InscriptionComponent } from '../components/inscription/inscription.component';
import { SponsorComponent } from '../components/sponsor/sponsor.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { LocationComponent } from '../components/location/location.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  entryComponents: [
    HomeComponent,
    AboutComponent,
    CalendarComponent,
    InscriptionComponent,
    SponsorComponent,
    GalleryComponent,
    LocationComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    ComponentsModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule { }
