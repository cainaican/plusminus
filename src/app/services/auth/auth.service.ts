import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiLoginUrl: string = 'http://localhost:5000/api/auth/login';
  private apiRegisterUrl: string = 'http://localhost:5000/api/auth/registration';
  constructor(private http: HttpClient) { }

  login(usercred: any) {
    return this.http
      .post(this.apiLoginUrl, usercred)
  }

  registration(usercred: any) {
    return this.http
      .post(this.apiRegisterUrl, usercred)
  }

  getUsersLogin(token){
    const user = this.http.get(`http://localhost:5000/api/user`, {
      headers: {'x-access-token': token}
    }).subscribe({
      next: value => {
        document.cookie = `email=${value["email"]};`
      },
      error: err => {
        console.log(err.message)
      }
    })
    let email = document.cookie
    return !!email
  }
}
