import { Component, OnInit } from '@angular/core';
import { GetFattureService } from 'src/app/service/fatture.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-modifica-fatture',
  templateUrl: './modifica-fatture.component.html',
  styleUrls: ['./modifica-fatture.component.css']
})
export class ModificaFattureComponent implements OnInit {
  urlFattura = 'https://epicode.online/epicodebeserviceunauth/api/fatture/'
  fattura: any;
  idFattura: any;


  constructor(
    public router: Router,
    public fattureService: GetFattureService,
    private myActRoute: ActivatedRoute,
    private fattureHttp: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.myActRoute.paramMap
      .subscribe(
        params => {
          this.idFattura = params.get('id');
          this.fattureHttp.get(this.urlFattura + this.idFattura)
            .subscribe(
              response => {
                this.fattura = response
              }
            );
        }
      )
  }

}
