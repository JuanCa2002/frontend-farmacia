import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Laboratory } from 'src/app/models/Laboratory';
import { Medicine } from 'src/app/models/medicine';
import { LaboratoryService } from 'src/app/services/laboratory.service';
import { MedicineService } from 'src/app/services/medice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-medicamento',
  templateUrl: './actualizar-medicamento.component.html',
  styleUrls: ['./actualizar-medicamento.component.css']
})
export class ActualizarMedicamentoComponent {
   medicine:Medicine = new Medicine();
   oldMedicine:Medicine = new Medicine();
   laboratories: Laboratory[];
   selectedLaboratory:Laboratory = new Laboratory();
   id:number;

   constructor(private medicineService:MedicineService, private router:Router,private laboratoryService:LaboratoryService, private activatedRoute:ActivatedRoute){
   }

    ngOnInit() {
      this.id= this.activatedRoute.snapshot.params['id'];
      this.getMedicineById();
      this.getAllLaboratories();
    }

    getMedicineById(){
      this.medicineService.getMedicineById(this.id).subscribe(dato =>{
           this.medicine = dato;
           this.oldMedicine = dato;
           this.getLaboratoryById();
      });
    }

    updateMedicine(){
         if(this.verifyData()){
          if(this.medicine.fabricationDate >= this.medicine.dueDate!){
            Swal.fire({
              icon: 'error',
              title: 'Error al registrar',
              text: 'La fecha de fabricación no puede ser mayor o igual a la expiracion',
            })
            
          }else{
            this.medicine.laboratoryId = this.selectedLaboratory.id;
            this.medicineService.updateMedicine(this.id, this.medicine).subscribe(dato=>{
            this.redirectionToForm();
             Swal.fire(
               'Genial',
               '¡Se ha actualizado con exito la medicina!',
               'success'
             )
            });
          }
         }else{
          Swal.fire({
            icon: 'error',
            title: 'Error al registrar',
            text: 'Asegurate de llenar todos los datos antes de realizar el registro',
          })
         }
    }
    

    verifyData(){
      if(this.medicine.name!=""&& this.medicine.fabricationDate!= undefined && this.medicine.dueDate!= undefined && this.medicine.stock!=0 && this.medicine.stock!=null && this.medicine.unitValue!=0 && this.medicine.unitValue!=null){
         return true;
      }else{
        return false;
      }
    }

    getAllLaboratories(){
      this.laboratoryService.getAllLaboratories().subscribe(data=>{
           this.laboratories = data;
      });
    }

    getLaboratoryById(){
      this.laboratoryService.getLaboratoryById(this.medicine.laboratoryId).subscribe(data =>{
            this.selectedLaboratory = data;
      });
    }

    redirectionToForm(){
      this.router.navigate(['inventario-medicinas']);
     }
}
