import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProyectsComponent } from './proyects/proyects.component';
import { HomeComponent } from './home/home.component';
import { I18nconfigModule } from '../i18nConfig/i18nconfig.module';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactComponent,
    ProyectsComponent,
    HomeComponent,
    ExperienceComponent,
  ],
  imports: [
    CommonModule,
    I18nconfigModule,
    PrimeNgModule,
    SharedModule 
  ],
  exports: [
    ContactComponent,
    HomeComponent,
    ExperienceComponent,
    ProyectsComponent,
  ]
})
export class PagesModule { }
