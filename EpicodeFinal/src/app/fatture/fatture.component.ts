import { Component, OnInit } from '@angular/core';
import { GetFattureService } from '../service/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

  fatture: any;
  page=1;
  pageSize=20;
  constructor(public fattureService: GetFattureService) { }

  ngOnInit(): void {
    this.fattureService.getFatture(1)
      .subscribe(
        response => {
          this.fatture = response;
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
    this.fattureService.getFatture(x.page-1)
      .subscribe(
        response => {
          this.fatture = response;
        },
      )
  }
}
