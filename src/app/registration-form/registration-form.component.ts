import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router }from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit{
  firstname: string = '';
  lastname: string = '';
  street: string = '';
  city: string = '';
  state: string = '';
  zip: string = '';
  phone: string ='';
  email: string ='';
  ageGroup: string = '';
  contactName : string = '';
  contactPhone : string = '';
  contactRelationship: string= '';
  isGoodHealth: boolean = false;
  healthInformation: string='';
  healthInsuranceCompany: string='';
  gender: string='';
  classDuration: string='';
  pastAttendance: string='';
  paymentType: string='';
  paymentCode: string='';
  // Access API URL
 
             
  constructor(private http: HttpClient, private router: Router) {
  }
  submit(): void {
    const apiUrl = environment.apiUrl;
    let data = {
      classDuration:this.classDuration, firstName:this.firstname, lastName:this.lastname, 
      gender:this.gender,address:this.street, city:this.city,
      state:this.state, zip:this.zip, phoneNumber:this.phone, email:this.email, ageGroup:this.ageGroup,
      contactName:this.contactName, contactPhone:this.contactPhone, contactRelationship:this.contactRelationship, 
      healthInformation:this.healthInformation, isGoodHealth:this.isGoodHealth, healthInsuranceCompany:this.healthInsuranceCompany,
      paymentType:this.paymentType, pastAttendance:this.pastAttendance, paymentCode:this.paymentCode
    };
    this.http.post(apiUrl+'/create', data).subscribe((response) => {
      this.router.navigate(["/"]);
  })
  }



  ngOnInit(): void {
  }
}
