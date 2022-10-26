import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../services/auth/auth.service";


@Injectable({
  providedIn: 'root'
})
export class MainGuardService implements CanActivate {
  private _emailToken: string

  constructor(private _authService: AuthService) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  {
    this._emailToken = document.cookie;
    const result = await this._authService.getUsersLogin(this._emailToken)
    console.log(result)
    return !!result
  }
}
