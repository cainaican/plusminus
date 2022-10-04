import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { CommonService } from 'src/app/services/common.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "", component: LoginComponent
}]

@NgModule({
  declarations: [
    LoginComponent,
  ],
  providers:[
    CommonService
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
