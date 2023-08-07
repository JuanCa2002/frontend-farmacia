import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { Laboratory } from '../models/Laboratory';


@Injectable({
    providedIn: 'root'
})

export class LaboratoryService{
    private base_url= 'http://localhost:8003/api/v1/laboratory';

    constructor(private httpClient:HttpClient ) { }

    public createLaboratory(laboratory:Laboratory):Observable<any>{
        return this.httpClient.post(`${this.base_url}`, laboratory);
    }

    public getAllLaboratories():Observable<Laboratory[]>{
        return this.httpClient.get<Laboratory[]>(`${this.base_url}`);
    }

    public getLaboratoryById(id:number):Observable<Laboratory>{
        return this.httpClient.get<Laboratory>(`${this.base_url}/${id}`);
    }

    public deleteLaboratory(id:number):Observable<any>{
        return this.httpClient.delete(`${this.base_url}/${id}`);
    }

    public updateLaboratory(id:number, laboratory:Laboratory):Observable<any>{
        return this.httpClient.put(`${this.base_url}/${id}`, laboratory);
    }


}