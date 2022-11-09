import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { PaticentService} from '../paticent.service';

@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.css']
})
export class AppointmentBookingComponent implements OnInit {
  
  

  constructor( private paticent:PaticentService) { }
  addpatient = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl(''),
  doctor: new FormControl(''),
  gender: new FormControl(''),
  DateSelected: new FormControl(''),

});
  ngOnInit(): void {
  }
  SaveData(){

    this.paticent.savePaticentData(this.addpatient.value).subscribe((result)=>{
      console.log(result);
    });
  }
  DateSelected: any;
  fetchdateselected(){
    console.log("Date Selected by user is ---"+this.DateSelected)
  }

}
