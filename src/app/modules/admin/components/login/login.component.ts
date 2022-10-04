import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  protected form: FormGroup;
  private respData: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null,[ Validators.required] ),
      password: new FormControl(null,[ Validators.required, Validators.min(8)] ),
    })
  }

  proceedLogin(){
    if(this.form.valid){
      this.authService.poceedLogin(this.form.value)
        .subscribe(result => {
          if (result) {
            this.respData = result;
            localStorage.setItem('jwtToken', this.respData.jwtToken)
          }
        })
    }
  }

}
