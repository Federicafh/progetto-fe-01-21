import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessServiceService {

  accessToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTEiLCJpYXQiOjE2MjIyMTMyOTcsImV4cCI6MTYyMzA3NzI5N30.QQJSh3ZRjMELAqXNXpvtW0zAqaqkH0K1nMiMwxR3aTZAwJpuQ38HZX34-iCAOuEg40l3pdeLH3VXN96x4PYggg'
  myHeader = new HttpHeaders().set('Autorization', this.accessToken)
  constructor(

  ) { }
}
