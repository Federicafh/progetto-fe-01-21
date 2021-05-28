import { Component, OnInit } from '@angular/core';
import { GetClientiService } from 'src/app/service/clienti.service';

@Component({
  selector: 'app-nuovo-cliente',
  templateUrl: './nuovo-cliente.component.html',
  styleUrls: ['./nuovo-cliente.component.css']
})
export class NuovoClienteComponent {
  nuovoCliente = {
    id: 0,
    ragioneSociale: "",
    partitaIva: "",
    tipoCliente: "",
    email: "",
    pec: "",
    telefono: "",
    nomeContatto: "",
    cognomeContatto: "",
    telefonoContatto: "",
    emailContatto: "",
    indirizzoSedeOperativa: {
        id: 2,
        via: "",
        civico: "",
        cap: "",
        localita: "",
        comune: {
            id: 1,
            nome: "",
            provincia: {
                id: 1,
                nome: "",
                sigla: ""
            }
        }
    },
    indirizzoSedeLegale: {
        id: 1,
        via: "",
        civico: "",
        cap: "",
        localita: "",
        comune: {
            id: 1,
            nome: "",
            provincia: {
                id: 1,
                nome: "",
                sigla: ""
            }
        }
    },
    dataInserimento: "",
    dataUltimoContatto: ""
  };

  constructor(
    public clientiService: GetClientiService
  ) { }

  postNuovoCliente(nuovoCliente:any){
    console.log(this.nuovoCliente)
    this.clientiService.postNuovoCliente(nuovoCliente);
  }

}
