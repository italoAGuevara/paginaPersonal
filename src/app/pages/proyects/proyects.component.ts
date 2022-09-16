import { Component } from '@angular/core';
import { Proyect } from 'src/app/interfaces/pages.interfaces';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {

  display: boolean = false;

  proyectSelected : Proyect = {
    title: 'projects.conversorCSV.title',
    subTitle: '',
    info: 'projects.conversorCSV.info',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
  }

  projects : Proyect[] =[
    {
      title: 'projects.conversorCSV.title',
      subTitle: '',
      info: 'projects.conversorCSV.info',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
    },
    {
      title: 'projects.editorJavascript.title',
      subTitle: '',
      info: 'projects.editorJavascript.info',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
    },
    {
      title: 'projects.conversorCSV.title',
      subTitle: '',
      info: 'projects.conversorCSV.info',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
    },
    {
      title: 'projects.conversorCSV.title',
      subTitle: '',
      info: 'projects.conversorCSV.info',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
    }
  ]

  /**
   * Muestra el modal con la información
   * 
   * @date 2022-Sep-16
   */
  showDialog(){
    this.display = true;
    this.proyectSelected
  }
}
