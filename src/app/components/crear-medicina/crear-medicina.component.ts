import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Laboratory } from 'src/app/models/Laboratory';
import { Medicine } from 'src/app/models/medicine';
import { LaboratoryService } from 'src/app/services/laboratory.service';
import { MedicineService } from 'src/app/services/medice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-medicina',
  templateUrl: './crear-medicina.component.html',
  styleUrls: ['./crear-medicina.component.css']
})
export class CrearMedicinaComponent {
    medicine:Medicine = new Medicine();
    laboratories: Laboratory[];
    selectedLaboratory:Laboratory = new Laboratory();
 
    constructor(private medicineService:MedicineService, private laboratoryService:LaboratoryService, private router:Router){
    }

    ngOnInit() {this.getAllLaboratories();}

    createMedicine(){
      this.medicine.laboratoryId = this.selectedLaboratory.id;
      this.medicineService.createMedicine(this.medicine).subscribe(data =>{
        this.redirectionToForm();
        Swal.fire(
          'Genial',
          '¡Se ha creado el medicamento con exito!',
          'success'
        )
      });
    }

    getAllLaboratories(){
      this.laboratoryService.getAllLaboratories().subscribe(data=>{
           this.laboratories = data;
      });
    }

    redirectionToForm(){
      this.router.navigate(['inventario-medicinas']);
     }
}
