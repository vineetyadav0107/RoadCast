import { Component, OnInit } from '@angular/core';
import {DateTimeService} from './date-time.service';
@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {
  
  time:any
  api:any
  constructor(private dateTime:DateTimeService) { }

  ngOnInit(): void {
   setInterval(() => {
      this.time=this.dateTime.getDateTime()
      this.dateTime.getDateTimeApi().subscribe((data:any)=>{
        this.api=data;
        // console.log(this.api)
        // console.log(this.time)
      })
    }, 1000);
  }

}
