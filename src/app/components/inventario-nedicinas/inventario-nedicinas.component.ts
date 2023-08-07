import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Laboratory } from 'src/app/models/Laboratory';
import { Column } from 'src/app/models/column';

import { Medicine } from 'src/app/models/medicine';
import { LaboratoryService } from 'src/app/services/laboratory.service';
import { MedicineService } from 'src/app/services/medice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventario-nedicinas',
  templateUrl: './inventario-nedicinas.component.html',
  styleUrls: ['./inventario-nedicinas.component.css']
})

export class InventarioNedicinasComponent {
  //Table varibles
  medicines: Medicine[];
  laboratory: Laboratory = new Laboratory();
  laboratories: Laboratory[] = [];
  cols!: Column[];

  constructor(private medicineService: MedicineService, private router:Router, private laboratoryService: LaboratoryService){}

  ngOnInit() {
     this.getAllMedicines();
     this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'name', header: 'Nombre' },
        { field: 'laboratoryId', header: 'Laboratorio fabricante'},
        { field: 'fabricationDate', header: 'Fecha de fabricación'},
        { field: 'dueDate', header: 'Fecha de expiración'},
        { field: 'stock', header: 'Cantidad' },
        { field: 'unitValue', header: 'Valor unitario' },
        { field: 'eliminar',header:''},
        { field: 'editar',header:'Acciones'},
        { field: 'vender',header:''},
    ];
 } 

 getAllMedicines(){
   this.medicineService.getAllMedicines().subscribe(dato =>{
        this.medicines = dato;
    });
 }

 getAllLaboratories(){
  this.laboratoryService.getAllLaboratories().subscribe(data =>{
    this.laboratories = data;
  });
 }

 getLaboratoryById(id:number){
  this.laboratoryService.getLaboratoryById(id).subscribe(data =>{
    this.laboratory = data;
    return this.laboratory.laboratoryName;
  });
 }

 createMedicine(){
  this.router.navigate(['crear-medicina']);
 }

 updateMedicine(id:number){
  this.router.navigate(['actualizar-medicina',id]);
 }

 deleteMedicine(id:number){
  Swal.fire({
    title: '¿Estas seguro de querer eliminar este medicamento?',
    text: "No podras recuperar la información de este si realizas esta acción",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminarlo'
  }).then((result) => {
    if (result.isConfirmed) {
      this.medicineService.deleteMedicine(id).subscribe(data =>{
        Swal.fire(
          'Eliminado!',
          'El medicamento se ha eliminado del sistema',
          'success'
        )
        this.getAllMedicines();
      });
    }
  })
 }



}
