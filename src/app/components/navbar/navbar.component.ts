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
            { label: 'Ventas', icon: 'pi pi-cart-plus' },
            { label: 'Documentation', icon: 'pi pi-fw pi-file' },
            { label: 'Settings', icon: 'pi pi-fw pi-cog' }
        ];

        this.activeItem = this.items[0];
    }
}

