import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AccessServiceService } from './access-service.service';


@Injectable({
  providedIn: 'root'
})

export class GetClientiService {
  idCliente: any;
  clienti: any;
  page= 0;
  content: any;
  nuovaFattura: any;
  cliente: any;
  nuovoCliente: any;
  urlTuttiClienti = 'https://epicode.online/epicodebeserviceunauth/api/clienti?page='+this.page+'&size=30&sort=id,ASC';
  urlModificaClienti = 'https://epicode.online/epicodebeserviceunauth/api/clienti/'
  urlFattura = 'https://epicode.online/epicodebeserviceunauth/api/fatture/';

  constructor(
    private clientiHttp: HttpClient,
    public router: Router,
    public accessService: AccessServiceService
  ) { }

  getClienti(x: any) {
    this.page=x;
    this.urlTuttiClienti = 'https://epicode.online/epicodebeserviceunauth/api/clienti?page='+this.page+'&size=20&sort=id,ASC';
    return this.clientiHttp.get(this.urlTuttiClienti),
    this.clientiHttp.get(this.urlTuttiClienti, {headers: this.accessService.myHeader})
  }

  public postNuovaFattura(idCliente: number, fattura: any) {
    this.clientiHttp.post<any>(this.urlFattura, fattura)
      .subscribe(
        response => {
          console.log(response);
          console.log('POST' + JSON.stringify(response));
          this.router.navigate(['fatture']);
        }
      )
  }

  public putClienti(id: number, datiCliente: any) {
    this.clientiHttp.put(this.urlModificaClienti + id, datiCliente)
      .subscribe(
        response => {
          console.log('response: ' + response);
          this.router.navigate(["clienti"])
        }
      )
  }

  public postNuovoCliente(cliente:any) {
    this.clientiHttp.post(this.urlModificaClienti, cliente)
    .subscribe(
      response => {
      console.log(JSON.stringify(response))
      this.router.navigate(["clienti"])
      }
    )
  }

  public modificaSingolaFattura( id: number, datiFattura: any) {
    console.log(datiFattura)
    this.clientiHttp.put(this.urlFattura + id, datiFattura)
    .subscribe(
      response => {
        console.log('response: ' + response);
        this.router.navigate(["fattureCliente/" + datiFattura.cliente.id])
      }
    )
  }

}
