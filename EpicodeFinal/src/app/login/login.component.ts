import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { AccessServiceService } from '../service/access-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logged: any;
  user = {
    username: "",
    password: ""
  }

  constructor(
    public router: Router,
    public loginService: LoginService,
    public accessService: AccessServiceService
  ) { }

  public loggedUser(user: any) {
    console.log(user)
    this.loginService.loginUser(this.user)
  }
}
