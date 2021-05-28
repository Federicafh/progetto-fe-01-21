import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccessServiceService } from './access-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlLogin = 'https://epicode.online/epicodebeserviceunauth/api/auth/login';
  logged: any;
  constructor(
    public myHttp: HttpClient,
    public accessService: AccessServiceService
  ) { }


  loginUser(login: any) {
    // console.log(this.myHttp.get(this.url))
    this.myHttp.post(this.urlLogin, login)
      .subscribe(
        response => {
          console.log(JSON.stringify(response))
          this.accessService.accessToken = this.logged,
          console.log(this.accessService.accessToken)
        }

      )

  }
}
