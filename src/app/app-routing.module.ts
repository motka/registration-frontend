import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [  
  { path: 'showRegistration', component: RegistrationFormComponent },
  { path: 'showReport', component: ReportComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
