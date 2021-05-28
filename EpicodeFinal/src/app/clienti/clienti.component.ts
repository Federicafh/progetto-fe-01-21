import { Component } from '@angular/core';
import { GetClientiService } from '../service/clienti.service';
import { Router } from '@angular/router';
import { AccessServiceService } from '../service/access-service.service';
@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent {
  content: any;
  clienti: any;
  page = 0;
  pageSize = 20;
  constructor(
    public router: Router,
    public clientiService: GetClientiService,
    public accessService: AccessServiceService
    ) {
  }

  ngOnInit() {
    this.clientiService.getClienti(1)
      .subscribe(
        response => {
          this.clienti = response;
          console.log(this.accessService.accessToken)
        },
      )
  }

  getRealId(page:number, index: number) {
    if(page == 1) {
      return index;
    } else {
      return index+20*(page-1);
    }
  }

  myPageChange(x:any) {
    console.log(x)
    this.clientiService.getClienti(x.page-1)
      .subscribe(
        response => {
          this.clienti = response;
        },
      )
  }

}
