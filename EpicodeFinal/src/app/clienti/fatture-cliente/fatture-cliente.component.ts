import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetFattureService } from 'src/app/service/fatture.service';

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})

export class FattureClienteComponent implements OnInit {
  fattureListeId: any;
  idCliente: any;
  fatture: any;
  constructor(
    public myActRout: ActivatedRoute,
    public fattureService: GetFattureService
  ) { }

  ngOnInit(): void {

    this.myActRout.paramMap
    .subscribe(
      params => {
        this.idCliente = params.get('id');
        this.fattureService.getFattureCliente(this.idCliente)
        .subscribe(
          response => {
            this.fattureListeId = response['content'];
          }
        )
      }
    )
  }
}
