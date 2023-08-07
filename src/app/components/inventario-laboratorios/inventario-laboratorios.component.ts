import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Laboratory } from 'src/app/models/Laboratory';
import { Column } from 'src/app/models/column';
import { LaboratoryService } from 'src/app/services/laboratory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventario-laboratorios',
  templateUrl: './inventario-laboratorios.component.html',
  styleUrls: ['./inventario-laboratorios.component.css']
})
export class InventarioLaboratoriosComponent {
  laboratories: Laboratory[];
  newLaboratory: Laboratory = new Laboratory();
  currentLaboratory: Laboratory= new Laboratory();
  cols!: Column[];
  visibleSb:boolean = false;
  visible: boolean = false;

  constructor(private laboratoryService: LaboratoryService, private router:Router){}

  ngOnInit() {
     this.getAllLaboratories();
     this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'laboratoryName', header: 'Nombre' },
        { field: 'eliminar',header:'Acciones'},
        { field: 'editar',header:''},
    ];
 }
 
 showDialogEdit(){
   this.visibleSb = true;
 }
 
 showDialog() {
    this.visible = true;
  }
 
 getAllLaboratories(){
   this.laboratoryService.getAllLaboratories().subscribe(data =>{
      this.laboratories = data;
   });
 }

 deleteLaboratory(id:number){
  Swal.fire({
    title: '¿Estas seguro de querer eliminar este laboratorio?',
    text: "No podras recuperar la información de este si realizas esta acción",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminarlo'
  }).then((result) => {
    if (result.isConfirmed) {
      this.laboratoryService.deleteLaboratory(id).subscribe(data =>{
        Swal.fire(
          'Eliminado!',
          'El laboratorio se ha eliminado del sistema',
          'success'
        )
        this.getAllLaboratories();
      });
    }
  })
   
 }

 getLaboratoryById(id:number){
    this.laboratoryService.getLaboratoryById(id).subscribe(data =>{
      this.currentLaboratory = data;
    });
    this.showDialogEdit();
 }

 updateLaboratory(){
   this.laboratoryService.updateLaboratory(this.currentLaboratory.id, this.currentLaboratory).subscribe(data=>{
    this.visibleSb = false;
    Swal.fire(
      'Genial',
      '¡Se ha actualizado el laborartorio con exito!',
      'success'
    )
    this.getAllLaboratories();
   });
 }

 createLaboratory(){
  this.laboratoryService.createLaboratory(this.newLaboratory).subscribe(data =>{
    this.visible = false;
    Swal.fire(
      'Genial',
      '¡Se ha creado el laborartorio con exito!',
      'success'
    )
    this.getAllLaboratories();
    this.newLaboratory= new Laboratory();
  });
 }
}
