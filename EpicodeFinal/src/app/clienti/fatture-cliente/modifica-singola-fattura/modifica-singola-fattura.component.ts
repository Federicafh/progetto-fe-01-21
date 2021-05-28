import { Component, OnInit } from '@angular/core';
import { GetClientiService } from 'src/app/service/clienti.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifica-singola-fattura',
  templateUrl: './modifica-singola-fattura.component.html',
  styleUrls: ['./modifica-singola-fattura.component.css']
})
export class ModificaSingolaFatturaComponent implements OnInit {
  urlFattura = 'https://epicode.online/epicodebeserviceunauth/api/fatture/'
  fattura: any;
  idFattura: any; 
  
  constructor(
    public router: Router,
    public clientiService: GetClientiService,
    private myActRoute: ActivatedRoute,
    private fattureHttp: HttpClient
  ) { }

  ngOnInit(): void {
    this.myActRoute.paramMap
      .subscribe(
        params => {
          this.idFattura = params.get('id');
          this.fattureHttp.get(this.urlFattura + this.idFattura)
            .subscribe(
              response => {
                this.fattura = response;
                console.log(this.fattura)
              }
            );
        }
      )
  }

}
