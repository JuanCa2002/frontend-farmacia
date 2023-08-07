import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioNedicinasComponent } from './components/inventario-nedicinas/inventario-nedicinas.component';
import { CrearMedicinaComponent } from './components/crear-medicina/crear-medicina.component';
import { ActualizarMedicamentoComponent } from './components/actualizar-medicamento/actualizar-medicamento.component';
import { InventarioLaboratoriosComponent } from './components/inventario-laboratorios/inventario-laboratorios.component';

const routes:Routes = [
    {path: 'inventario-medicinas', component:InventarioNedicinasComponent},
    {path: 'inventario-laboratorios', component:InventarioLaboratoriosComponent},
    {path:'actualizar-medicina/:id',component:ActualizarMedicamentoComponent},
    {path: 'crear-medicina', component:CrearMedicinaComponent},
    {path: '**', pathMatch: 'full', redirectTo:'inventario-medicinas'}
]
   
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }