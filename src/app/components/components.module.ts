import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CalendarComponent } from './calendar/calendar.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LocationComponent } from './location/location.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CalendarComponent,
    InscriptionComponent,
    SponsorComponent,
    GalleryComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    CalendarComponent,
    InscriptionComponent,
    SponsorComponent,
    GalleryComponent,
    LocationComponent
  ]
})
export class ComponentsModule { }
