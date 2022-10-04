import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../../../interfaces/auth-interfaces";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiurl: string = 'http://localhost:4200/user/authenticate'

  constructor(private http: HttpClient) { }

  poceedLogin(usercred: any){
    return this.http
      .post(this.apiurl, usercred)
  }

}
