import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

  dockItems: MenuItem[] = []

  ngOnInit() {
      this.dockItems = [
          {
              label: 'Mail',
              icon: "assets/icons/mail apple.png"
          },
          {
              label: 'Call',
              icon: "assets/icons/phone apple.png"
          },
          {
              label: 'Photos',
              icon: "assets/showcase/images/dock/photos.svg"
          },
          {
              label: 'Trash',
              icon: "assets/showcase/images/dock/trash.png"
          }
      ];

  }

}
