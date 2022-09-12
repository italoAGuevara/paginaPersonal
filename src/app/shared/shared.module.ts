import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { I18nconfigModule } from '../i18nConfig/i18nconfig.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ScrollComponent } from './scroll/scroll.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ScrollComponent,
  ],
  imports: [
    CommonModule,
    I18nconfigModule,
    PrimeNgModule,
  ],
  exports: [
      FooterComponent,
      NavbarComponent,
      ScrollComponent,
    ]
})
export class SharedModule { }
