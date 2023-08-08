import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Medicine } from '../models/medicine';

@Injectable({
    providedIn: 'root'
})

export class MedicineService{
    private base_url= 'http://localhost:8002/api/v1/medicine';

    constructor(private httpClient:HttpClient ) { }

    public getAllMedicines():Observable<Medicine[]>{
        return this.httpClient.get<Medicine[]>(`${this.base_url}`);
    }

    public getMedicineById(id:number):Observable<Medicine>{
        return this.httpClient.get<Medicine>(`${this.base_url}/${id}`);
    }

    public getMedicinesByLaboratory(laboratoryId:number):Observable<Medicine[]>{
        return this.httpClient.get<Medicine[]>(`${this.base_url}/laboratory/${laboratoryId}`);
    }

    public createMedicine(medicine:Medicine):Observable<any>{
        return this.httpClient.post(`${this.base_url}`,medicine);
    }

    public deleteMedicine(id:number):Observable<any>{
        return this.httpClient.delete(`${this.base_url}/${id}`);
    }

    public updateMedicine(id:number, medicine:Medicine):Observable<any>{
        return this.httpClient.put(`${this.base_url}/${id}`, medicine);
    }

    public updateStockMedicine(id:number, stockSale: number):Observable<any>{
        const amountStockLess = new FormData();
        // @ts-ignore
        amountStockLess.append("stock", stockSale);
        return this.httpClient.put(`${this.base_url}/stock/${id}`, amountStockLess);
    }

    getMedicineByName(term:string,medicines:Medicine[]):Medicine[]{
        let foundMedicines: Medicine[]=[]
        term= term.toLowerCase();
        for(let medicine of medicines){
          let name=medicine.name.toLowerCase();
          if(name.indexOf(term)>=0){
            foundMedicines.push(medicine);
          }
        }
        return foundMedicines;
      }


}