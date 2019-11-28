import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Vehicule } from "./car/vehicule";
@Injectable({
    providedIn: 'root'
})
export class CarRecordService {
    Url = "http://localhost:14026/Api/vehicule/";
    constructor(private http: HttpClient) { }
    InsertVehicule(vehicule: Vehicule) {
        debugger;
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<Vehicule[]>(this.Url + '/InsertVehicule/', Vehicule, httpOptions)
    }
    GetVehiculeRecord(): Observable<Vehicule[]> {
        debugger;
        return this.http.get<Vehicule[]>(this.Url + "/GetAllVehicule")
    }
    DeleteVehicule(id: string): Observable<number> {
        debugger;
        return this.http.get<number>(this.Url + '/Delete/?id=' + id);
    }
    GetVehiculeById(id: string) {
        return this.http.get<Vehicule>(this.Url + '/GetVehiculeById/?id=' + id);
    }
    UpdateVehicule(vehicule: Vehicule) {
        debugger;
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<Vehicule[]>(this.Url + '/UpdateVehicule/', vehicule, httpOptions)
    }
}
