import { IDriver } from './model/driver';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private drivers_url: string = "http://127.0.0.1:5000/api/drivers";
  private standing_url: string = "http://127.0.0.1:5000/api/standings.json"
  
  constructor(private http: HttpClient) { }

  getDrivers(): Observable<IDriver[]>{
    return this.http.get<IDriver[]>(this.drivers_url);
  }

  getStanding():Observable<IDriver[]>{
    return this.http.get<IDriver[]>(this.standing_url)
  }
}
