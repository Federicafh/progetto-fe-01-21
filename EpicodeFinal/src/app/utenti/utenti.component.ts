import { Component, OnInit } from '@angular/core';
import { UtentiService } from '../service/utenti.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {

  constructor(
    public router: Router,
    public utentiService: UtentiService,
  ) { 
  }

  ngOnInit(): void {
    this.utentiService.getUsers();
  }

}
