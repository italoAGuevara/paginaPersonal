import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { TreeNode } from 'primeng/api';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  events: any[] = []

  data: TreeNode[] = []

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

  constructor() { }

  ngOnInit() {

    this.events = [
        {status: 'Grupo Konecta', date: 'Jul-2022 | Hoy', icon: 'pi pi-star'},
        {status: 'Softka SAS', date: 'Mar-2022 | Jul-2022', icon: 'pi pi-eject'},
        {status: 'Semillero Softka SAS', date: 'Feb-2022 | Mar-2022', icon: 'pi pi-user-edit'},
        {status: 'Freelance', date: 'Jul-2021 | Hoy', icon: 'pi pi-user'},
        {status: 'Estudiante', date: 'Oct-2020 | Hoy', icon: 'pi pi-compass'}
    ];
  }

}
