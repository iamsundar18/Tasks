import { Component, OnInit } from '@angular/core';
import { Details } from '../../details';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  user = new Details('', '', '', '');

  ngOnInit(): void {
  }
  regSuccess(gett: any) {
    if (gett.invalid) {
      return;
    }
    console.log(gett);
  }

}
