import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetFattureService {
  id = 0;
  fatture: any = [];
  fattura: any;
  page = 0;
  urlTutteFatture = 'https://epicode.online/epicodebeserviceunauth/api/fatture?page=3&size=20&sort=id';
  urlFatture = 'https://epicode.online/epicodebeserviceunauth/api/fatture/';
  urlFatturaCliente = 'https://epicode.online/epicodebeserviceunauth/api/fatture/cliente/'

  constructor(
    private fattureHttp: HttpClient,
    public router: Router,
  ) { }

  getFatture(x: any) {
    this.page = x;
    this.urlTutteFatture = 'https://epicode.online/epicodebeserviceunauth/api/fatture?page=' + this.page + '&size=20&sort=id';
    return this.fattureHttp.get(this.urlTutteFatture)
  }

  getFattureCliente(id: any) {
    return this.fattureHttp.get<any>(this.urlFatturaCliente + id)
  }


  postFattura(nuovaFattura: any) {
    this.fattureHttp.post(this.urlFatture, nuovaFattura)
      .subscribe(
        response => {
          console.log("Post " + JSON.stringify(response));
          this.router.navigate(["fattureCliente/" + nuovaFattura.cliente.id])
        }

      )
  }

  public putFatture(id: number, datiFattura: any) {
    this.fattureHttp.put(this.urlFatture + id, datiFattura)
      .subscribe(
        response => {
          console.log('response: ' + response);
          this.router.navigate(["fatture"])
        }
      )

  }

}
