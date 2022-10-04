import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CommonComponent} from "./layouts/common/common.component";
import { LoginComponent } from './modules/admin/components/login/login.component';

const routes: Routes = [
  {
    path: "", loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule),
  },
  {
    path: "user", component: CommonComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
