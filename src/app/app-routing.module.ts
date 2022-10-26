import {NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes} from "@angular/router";
import {CommonComponent} from './view/layouts/common/common.component';
import {MainGuardService} from "./modules/admin/services/main-guard.service";

const routes: Routes = [
  {
    path: "", redirectTo: "/login", pathMatch: "full"
  },
  {
    path: "", loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule),
  },
  {
    path: "user", component: CommonComponent, canActivate: [MainGuardService]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
