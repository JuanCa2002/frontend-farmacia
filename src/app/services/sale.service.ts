import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Sale } from '../models/sale';


@Injectable({
    providedIn: 'root'
})

export class SaleService{
    private base_url= 'http://localhost:8004/api/v1/sale';

    constructor(private httpClient:HttpClient ) { }

    public getAllSales():Observable<Sale[]>{
        return this.httpClient.get<Sale[]>(`${this.base_url}`);
    }

    public getSaleById(id:number):Observable<Sale>{
        return this.httpClient.get<Sale>(`${this.base_url}/${id}`);
    }

    public createSale(sale:Sale):Observable<any>{
        return this.httpClient.post(`${this.base_url}`, sale);
    }

    public getSalesByDateRange(dateOne:string, dateTwo:string):Observable<Sale[]>{
        return this.httpClient.get<Sale[]>(`${this.base_url}/dates/${dateOne}/${dateTwo}`);
    }
}
