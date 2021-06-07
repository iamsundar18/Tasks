import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onReg(value: any) {
    this.user.push(value);
    console.log(this.user);
  }

}
