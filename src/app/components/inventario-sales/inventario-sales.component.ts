import { Component } from '@angular/core';
import { Column } from 'src/app/models/column';
import { Sale } from 'src/app/models/sale';
import { forkJoin, map } from 'rxjs';
import { format } from 'date-fns';
import { MedicineService } from 'src/app/services/medice.service';
import { SaleService } from 'src/app/services/sale.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventario-sales',
  templateUrl: './inventario-sales.component.html',
  styleUrls: ['./inventario-sales.component.css']
})
export class InventarioSalesComponent {

  sales!: Sale[];

  cols!: Column[];

  initialDate:Date|undefined;
  finalDate:Date|undefined;
  removeFilterVisible:boolean = false;

  constructor(private saleService:SaleService, private medicineService:MedicineService){}

  ngOnInit() {
    this.getAllSales();
    console.log(this.initialDate);
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'creationDate', header: 'Fecha de creación' },
      { field: 'unitValue', header: 'Valor unitario' },
      { field: 'stockSale', header: 'Cantidad' },
      { field: 'medicineName', header: 'Medicina' },
      { field: 'totalValue', header: 'Valor total' }
  ];
  }

  removeFilter(){
    this.initialDate = undefined;
    this.finalDate = undefined;
    this.removeFilterVisible = false;
    this.getAllSales();
  }

  filterByDateRange(){
     if(this.initialDate! >= this.finalDate!){
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'La fecha inicial tiene que ser menor a la final',
      })
     }else{
      this.removeFilterVisible = true;
     let dateO = format(this.initialDate!, 'dd-MM-yyyy');
     let dateT = format(this.finalDate!, 'dd-MM-yyyy');
     this.saleService.getSalesByDateRange(dateO,dateT).subscribe(data=>{
      if(data == null){
        this.sales = [];
        Swal.fire({
          icon: 'info',
          title: 'Vaya...',
          text: 'Al parecer no hubieron ventas entre esas fechas',
        })
      }else{
        const salesObservables = data.map(sale => {
          return this.medicineService.getMedicineById(sale.medicineId).pipe(
            map(medicine => {
              sale.medicineName = medicine.name;
              return sale;
            })
          );
        });
    
        forkJoin(salesObservables).subscribe(updatedSales => {
          this.sales = updatedSales;
          console.log(this.sales);
        });  
      }
      
     });
     }
   }

  getAllSales(){
     this.saleService.getAllSales().subscribe(data =>{
      const salesObservables = data.map(sale => {
        return this.medicineService.getMedicineById(sale.medicineId).pipe(
          map(medicine => {
            sale.medicineName = medicine.name;
            return sale;
          })
        );
      });
  
      forkJoin(salesObservables).subscribe(updatedSales => {
        this.sales = updatedSales;
      });
    });
     }
}
