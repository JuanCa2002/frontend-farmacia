import { Component } from '@angular/core';
import { Column } from 'src/app/models/column';
import { Sale } from 'src/app/models/sale';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-inventario-sales',
  templateUrl: './inventario-sales.component.html',
  styleUrls: ['./inventario-sales.component.css']
})
export class InventarioSalesComponent {

  sales!: Sale[];

  cols!: Column[];

  constructor(private saleService:SaleService){}

  ngOnInit() {
    this.getAllSales();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'creationDate', header: 'Fecha de creación' },
      { field: 'unitValue', header: 'Valor unitario' },
      { field: 'stockSale', header: 'Cantidad' },
      { field: 'totalValue', header: 'Valor total' }
  ];
  }

  getAllSales(){
     this.saleService.getAllSales().subscribe(data =>{
       this.sales = data;
     });
  }
  
}
