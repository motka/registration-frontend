import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router }from '@angular/router';
import { environment } from 'src/environments/environment';
import * as jsonData from 'src/assets/data.json';


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
  phoneNumber: string ='';
  email: string ='';
  ageGroup: string = '';
  contactName : string = '';
  contactPhone : string = '';
  contactRelationship: string= '';
  goodHealth: boolean = false;
  healthInformation: string='';
  healthInsuranceCompany: string='';
  gender: string='';
  classDuration: string='';
  pastAttendance: string='';
  paymentType: string='';
  paymentCode: string='';
  // Access API URL
  apiUrl = environment.apiUrl;
             
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    console.log("Name :", jsonData.teacherName);
    throw new Error('Method not implemented.');
  }

  submit(): void {
   
    let data = {
      classDuration:this.classDuration, firstName:this.firstname, lastName:this.lastname, 
      gender:this.gender,address:this.street, city:this.city,
      state:this.state, zip:this.zip, phoneNumber:this.phoneNumber, email:this.email, ageGroup:this.ageGroup,
      contactName:this.contactName, contactPhone:this.contactPhone, contactRelationship:this.contactRelationship, 
      healthInformation:this.healthInformation, goodHealth:this.goodHealth, healthInsuranceCompany:this.healthInsuranceCompany,
      paymentType:this.paymentType, pastAttendance:this.pastAttendance, paymentCode:this.paymentCode
    };
    this.http.post(this.apiUrl+'/create', data).subscribe((response) => {
      this.router.navigate(["/"]);
  })
  }

  // generatePDF(): void {
  //   // Make an HTTP request to the Spring backend to generate PDF
  //   this.http.get<any[]>(this.apiUrl+'/generate-pdf').subscribe((response) => {
  //     let result: any[] = [];  
  //     response.forEach(item=>{
  //       let newItem: Record<string, any> = {};
  //       this.displayedColumns.forEach(name=>{
  //         console.log(name, ' == ',item[name])
  //         if(item[name] == undefined){
  //           console.log('undefined -->',name)
  //           newItem[name] = "";
  //         }else newItem[name]=item[name];
  //       })
  //       result.push(newItem);
  //     })
  //     this.data = result;
  //     this.router.navigate(["showReport"]);
  //} 
 
}
