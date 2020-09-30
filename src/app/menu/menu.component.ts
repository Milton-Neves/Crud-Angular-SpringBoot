import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[]
  ngOnInit() {
    this.items = [
      {
          label: 'Home', 
          icon: 'pi pi-fw pi-home',
          routerLink:'home'
          },
      {
          label: 'Usuario',
          icon: 'pi pi-fw pi-user',
          routerLink:'usuario'
      },
      {
          label: 'Estados',
          icon: 'pi pi-fw pi-users',
          routerLink:'estados'
      }
    ];
  }
}
