import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl } from '@angular/forms';
import { CarRecordService } from "../carRecord.service";
import { Observable } from "rxjs";
import { identifierModuleUrl } from '@angular/compiler';
import { Router } from '@angular/router';
import { Vehicule } from '../car/vehicule';
@Component({
    selector: 'app-addcar',
    templateUrl: './addcar.component.html',
   // styleUrls: ['./addcar.component.scss']
})
export class AddCarComponent implements OnInit {
    massage: string;
    dataSaved = false;
    Addvehicule: FormGroup;
    VehiculeIdUpdate = "0";
    constructor(private router: Router, private carRecordService: CarRecordService) { }
    InsertVehicule(vehicule: Vehicule) {
        debugger;
        if (this.VehiculeIdUpdate != "0") vehicule.Id = this.VehiculeIdUpdate;
        this.carRecordService.InsertVehicule(vehicule).subscribe(
            () => {
                if (this.VehiculeIdUpdate == "0") {
                    this.massage = 'Saved Successfully';
                }
                else {
                    this.massage = 'Update Successfully';
                }
                this.dataSaved = true;
                this.router.navigate(['/employee']);
            })
    }
    onFormSubmit() {
        const Emp = this.Addvehicule.value;
        this.InsertVehicule(Emp);
    }
    VehiculeEdit(id: string) {
        debugger;
        this.carRecordService.GetVehiculeById(id).subscribe(emp => {
            this.massage = null;
            this.dataSaved = false;
            debugger;
            this.VehiculeIdUpdate = id;
            this.Addvehicule.controls['Marque'].setValue(emp.Marque);
            this.Addvehicule.controls['Modele'].setValue(emp.Modele);
            this.Addvehicule.controls['Immatriculation'].setValue(emp.Immatriculation);
            this.Addvehicule.controls['kilometrage'].setValue(emp.Kilometrage);
        });
        debugger;
    }
    clearform() {
        debugger;
        this.Addvehicule.controls['Marque'].setValue("");
        this.Addvehicule.controls['Modele'].setValue("");
        this.Addvehicule.controls['Immatriculation'].setValue("");
        this.Addvehicule.controls['kilometrage'].setValue("");
    }
    ngOnInit() {
        this.Addvehicule = new FormGroup({
            Marque: new FormControl(),
            Modele: new FormControl(),
            Immatriculation: new FormControl(),
            kilometrage: new FormControl(),

        });
        let Id = localStorage.getItem("id");
        if (Id != null) {
            this.VehiculeEdit(Id);
        }
    }
}
