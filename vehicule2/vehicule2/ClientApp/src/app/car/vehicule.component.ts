import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicule } from './vehicule';

@Component({
    selector: 'app-car',
    templateUrl: './vehicule.component.html'
})
export class VehiculeComponent {
    vehicules: Vehicule[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<Vehicule[]>(baseUrl + 'api/Vehicule').subscribe(result => {
            this.vehicules = result;
           console.log(result);
        }, error => console.error(error));
    }
}
