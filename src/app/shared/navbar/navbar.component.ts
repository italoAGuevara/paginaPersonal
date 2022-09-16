import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  flat : string = '../assets/flats/english.png'

  languaje : string = 'en'

  dockBasicItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'assets/icons/home.png',
      routerLink: ''
    },
    {
      label: 'Experience',
      icon: 'assets/icons/stocks.png',
      routerLink: '/experience'
    },
    {
      label: 'Projects',
      icon: 'assets/icons/terminal.svg',
      routerLink: '/projects'
    },
    {
      label: 'Contact',
      icon: 'assets/icons/messages.png',
      routerLink: '/contact'
    },
    {
      label: 'Github',
      icon: 'assets/icons/github.svg',
      url: 'https://github.com/italoAGuevara'
    },
  ];


  constructor( public translate: TranslateService, private primengConfig: PrimeNGConfig ) {
    this.translate.addLangs( [ 'es', 'en' ] )
    this.translate.setDefaultLang( 'es' )
  }


  ngOnInit() {
    this.primengConfig.ripple = true
  }


  selectLanguaje() : void {

    this.translate.use( this.languaje ) 

    if ( this.languaje== 'es' ) {
        
      this.languaje= 'en';
      this.flat = '../assets/flats/english.png'

    } else {

      this.languaje = 'es';
      this.flat = '../assets/flats/spain.png'
    }
  }
}
