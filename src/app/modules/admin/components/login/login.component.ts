import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  protected form: FormGroup;
  private respData: any;

  constructor(
    private _authService: AuthService,
    private _fb: FormBuilder,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
    })
  }

  proceedLogin() {
    if (this.form.valid) {
       this._authService.login(this.form.value)
         .subscribe({
           next: result => {
             if (result) {
               this.respData = result.toString();
               document.cookie = `${this.respData}; max-age=86400`
               this._router.navigate(['user'])
             }
           },
           error: err => {
             console.dir(err.message)
           }
         })
    }
  }

}
