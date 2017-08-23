import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class VehicleService {

  constructor(private http: Http) { }
  getMakes(){
    return this.http.get('/api/makes')
      .map(res=> res.json());
  }

  getFeature(){
    return this.http.get('/api/features')
      .map(res=>res.json());
  }

  create(vehicle){
    return this.http.post('/api/vehicles', vehicle)
      .map(res=> res.json())
  }
}
