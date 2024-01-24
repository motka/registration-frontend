import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit{
  data: any[] = []

  displayedColumns: string[]=["classDuration","firstName", "lastName", "gender", "address", "city", "state", "zip",
    "phoneNumber", "email", "contactName", "contactPhone", "contactRelationship",
    "healthInformation", "healthInsuranceCompany", "pastAttendance", "paymentType"]

  constructor(private http: HttpClient, private router:Router) {
  }
  
  ngOnInit(): void {
    const apiUrl = environment.apiUrl;
    this.http.get<any[]>(apiUrl+'/viewReport').subscribe((response) => {
    let result: any[] = [];  
    response.forEach(item=>{
        let newItem: Record<string, any> = {};
        this.displayedColumns.forEach(name=>{
          console.log(name, ' == ',item[name])
          if(item[name] == undefined){
            console.log('undefined -->',name)
            newItem[name] = "";
          }else newItem[name]=item[name];
        })
        result.push(newItem);
      })
      this.data = result;
      this.router.navigate(["showReport"]);
  })
}
}
