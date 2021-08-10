import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {
  time = new Date();
  constructor( private http:HttpClient) { }
  
  // getting date and time from api
  getDateTime(){
    return this.time = new Date();
    //  console.log(this.time)
  }
  getDateTimeApi(){
    return this.http.get('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
  }
}
