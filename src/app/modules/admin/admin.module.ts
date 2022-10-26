import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { CommonService } from 'src/app/services/common.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
 {
  path: "login", component: LoginComponent,
 },
 {
  path: "registration", component: RegistrationComponent,
 }
]

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
  ],
  providers:[
    CommonService
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
