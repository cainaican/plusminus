import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

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

  proceedRegistration() {

    if (this.form.valid) {
      this._authService.registration(this.form.value)
      .subscribe({
        next: result => {
          if (result) {
            this.respData = result;
            this._router.navigate(['user'])
            console.log(this.respData)
          } else {
          }
        },
        error: err => {
          console.dir(err.message)
        }
      })
    }
  }


}
