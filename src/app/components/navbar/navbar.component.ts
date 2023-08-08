import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    items: MenuItem[];

    activeItem: MenuItem;

    ngOnInit() {
        this.items = [
            { label: 'Inventario medicinas', icon: 'pi pi-book', routerLink: 'inventario-medicinas'},
            { label: 'Laboratorios', icon: 'pi pi-fw pi-file' , routerLink: 'inventario-laboratorios'},
            { label: 'Ventas', icon: 'pi pi-cart-plus', routerLink:'inventario-ventas' }
        ];

        this.activeItem = this.items[0];
    }
}

