import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  urlSignup = 'https://epicode.online/epicodebeserviceunauth/api/auth/signup';
  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  postSignup(utente:any) {
    this.http.post(this.urlSignup, utente)
    .subscribe(
      response =>
      console.log(JSON.stringify(response))
    )
  }
}
