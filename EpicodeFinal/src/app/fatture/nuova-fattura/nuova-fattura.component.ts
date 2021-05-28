import { Component, OnInit } from '@angular/core';
import { GetFattureService } from 'src/app/service/fatture.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-nuova-fattura',
  templateUrl: './nuova-fattura.component.html',
  styleUrls: ['./nuova-fattura.component.css']
})
export class NuovaFatturaComponent implements OnInit {
idCliente: any;
urlCliente = 'https://epicode.online/epicodebeserviceunauth/api/clienti/';
cliente: any;

nuovaFattura: any = {
  data:"",
  numero: "",
  anno: "",
  importo: "",
  stato: {
    id:1,
    nome: ""
  },
  cliente: {}
}

  constructor(
    public router: Router,
    public fattureService: GetFattureService,
    private myActRoute: ActivatedRoute,
    private Http: HttpClient
  ) { }

  ngOnInit(): void {
    this.myActRoute.paramMap
    .subscribe(
      params=>{
        this.idCliente = params.get('idCliente');
        this.Http.get(this.urlCliente + this.idCliente)
          .subscribe(
            response => {
              this.cliente = response
            }
          );
      }
    )
  }

  salvaFattura (nuovaFattura:any) {
    nuovaFattura.cliente = this.cliente;
    this.fattureService.postFattura(nuovaFattura);
  }

}
