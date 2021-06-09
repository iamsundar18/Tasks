import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showText(em: string) {
    if (em != "") alert("Welcome" + " " + em)
    else alert("Fill the form...")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
