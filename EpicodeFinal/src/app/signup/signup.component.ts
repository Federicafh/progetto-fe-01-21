import { Component, OnInit } from '@angular/core';
import { SignupService } from '../service/signup.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    public signupService: SignupService,
    public router: Router,
    public myActRoute: ActivatedRoute
  ) { }

  nuovoSignup = {
    username: "",
    email: "",
    password: "",
    role: [""]
  }

  postNuovoSignup(nuovoSignup: any) {
    console.log(this.nuovoSignup)
    this.signupService.postSignup(this.nuovoSignup)
  }
  ngOnInit(): void {
  }
}
