import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Skill } from 'src/app/interfaces/pages.interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

    skills : Skill[] = [
        {
          id:'Angular',
          more:'',
          img:'../../../assets/icons/skills/angular.png'
        },
        {
          id:'.NET',
          more:'',
          img:'../../../assets/icons/skills/net.svg'
        },
        {
          id:'Sql Server',
          more:'',
          img:'../../../assets/icons/skills/sql server.png'
        },
        {
          id:'Inconcert',
          more:'',
          img:'../../../assets/icons/skills/inconcert.jpg'
        },
        {
          id:'Asterisk',
          more:'',
          img:'../../../assets/icons/skills/asterisk.png'
        },
        {
          id:'Docker',
          more:'',
          img:'../../../assets/icons/skills/docker.png'
        }
      ]

}
