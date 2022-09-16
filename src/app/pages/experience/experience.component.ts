import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { TreeNode } from 'primeng/api';
import { Events, Skill } from 'src/app/interfaces/pages.interfaces';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  moreInfoRout : string[] = ['additionalsText.moreInfo', 'additionalsText.lessInfo']

  skills: Skill[] = [
    {
      id:'Angular',
      img:'../assets/icons/skills/angular.png',
      more:'hfghgfh'
    },
    {
      id:'.Net',
      img:'../assets/icons/skills/net.svg',
      more:'hfghgfh'
    },
    {
      id:'Sql Server',
      img:'../assets/icons/skills/sql server.png',
      more:'hfghgfh'
    },
    {
      id:'Sql Server',
      img:'../assets/icons/skills/asterisk.png',
      more:'hfghgfh'
    },
    {
      id:'Sql Server',
      img:'../assets/icons/skills/docker.png',
      more:'hfghgfh'
    },
    {
      id:'Sql Server',
      img:'../assets/icons/skills/inconcert.jpg',
      more:'hfghgfh'
    },
    {
      id:'English',
      img:'../assets/flats/english.png',
      more:'hfghgfh'
    }
  ]

  events: Events[] = [
    {status: 'Grupo Konecta', date: 'Jul-2022 | Hoy', icon: 'pi pi-star', rout:'experience.konecta',skills:['.NET','ANGULAR','SQL SERVER','INCONCERT','ASTERISK']},
    {status: 'Softka SAS', date: 'Mar-2022 | Jul-2022', icon: 'pi pi-eject', rout:'experience.sofka',skills:['.NET','ANGULAR','SQL SERVER','INCONCERT','ASTERISK']},
    {status: 'Semillero Softka SAS', date: 'Feb-2022 | Mar-2022', icon: 'pi pi-user-edit', rout:'experience.semillero',skills:['.NET','ANGULAR','SQL SERVER','INCONCERT','ASTERISK']},
   /*  {status: 'Freelance', date: 'Jul-2021 | Hoy', icon: 'pi pi-user', rout:'experience.freelance'}, */
    {status: 'Estudiante', date: 'Oct-2020 | Hoy', icon: 'pi pi-compass', rout:'experience.study',skills:['.NET','ANGULAR','SQL SERVER','INCONCERT','ASTERISK']}
]


  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor( ) { }

  ngOnInit() {

  }

}
