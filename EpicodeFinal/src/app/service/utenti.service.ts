import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {
  urlUtenti = 'https://epicode.online/epicodebeserviceunauth/api/users';
  utenti: any;
  constructor(
    private mioHttp: HttpClient
  ) { }

  getUsers() {
    this.mioHttp.get(this.urlUtenti)
    .subscribe(
      response => {
        this.utenti = response;
      },
      error => console.error('error: ' + error),
      () => console.log('completed')
    )
  }
}
