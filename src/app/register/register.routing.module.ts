import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainRegistrationComponent } from './main-registration/main-registration.component';
import { CompanyComponent } from './company/company.component';


const routes: Routes = [
  {path: 'register', component: MainRegistrationComponent},
  {path: 'company', component: CompanyComponent},
  {path: '', redirectTo: 'company', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
