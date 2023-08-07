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

    public createMedicine(medicine:Medicine):Observable<any>{
        return this.httpClient.post(`${this.base_url}`,medicine);
    }

    public deleteMedicine(id:number):Observable<any>{
        return this.httpClient.delete(`${this.base_url}/${id}`);
    }

    public updateMedicine(id:number, medicine:Medicine):Observable<any>{
        return this.httpClient.put(`${this.base_url}/${id}`, medicine);
    }


}