import { Component } from '@angular/core';
import { ContactItem, Skill } from 'src/app/interfaces/pages.interfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  contactsItem : ContactItem[] = [
    {
      title : 'additionalsText.phone',
      icon: '../../../assets/icons/phone apple.png',
      url : 'https://wa.me/573138456818?text=Hola%20Italo'
    },
    {
      title : 'additionalsText.mail',
      icon: '../../../assets/icons/mail apple.png',
      url: 'mailto:italo.guevarav@gmail.com'
    },
    {
      title : 'additionalsText.linkedin',
      icon: '../../../assets/icons/linkedin.png',
      url: 'https://www.linkedin.com/in/italo-alberto-guevara-villamil-a6b55620b/'
    }
  ]
}