import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetClientiService } from 'src/app/service/clienti.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {

  idCliente: any;
  cliente: any;
  urlCliente = 'https://epicode.online/epicodebeserviceunauth/api/clienti/'
  constructor(
    public router: Router,
    public clientiService: GetClientiService,
    private myActRoute: ActivatedRoute,
    private clientiHttp: HttpClient
  ) { }

  ngOnInit(): void {
    this.myActRoute.paramMap
      .subscribe(
        params => {
          this.idCliente = params.get('id');
          this.clientiHttp.get(this.urlCliente + this.idCliente)
          .subscribe(
            response => {
              this.cliente = response
            }
          );
        }
      )
  }
}
