import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { InventarioNedicinasComponent } from './components/inventario-nedicinas/inventario-nedicinas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { PaginatorModule } from 'primeng/paginator';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CrearMedicinaComponent } from './components/crear-medicina/crear-medicina.component';
import { ActualizarMedicamentoComponent } from './components/actualizar-medicamento/actualizar-medicamento.component';
import { InventarioLaboratoriosComponent } from './components/inventario-laboratorios/inventario-laboratorios.component';
import { InventarioSalesComponent } from './components/inventario-sales/inventario-sales.component';

@NgModule({
  declarations: [
    AppComponent,
    InventarioNedicinasComponent,
    NavbarComponent,
    CrearMedicinaComponent,
    ActualizarMedicamentoComponent,
    InventarioLaboratoriosComponent,
    InventarioSalesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    MenubarModule,
    PaginatorModule,
    CalendarModule,
    InputTextModule,
    ConfirmDialogModule,
    TabMenuModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
