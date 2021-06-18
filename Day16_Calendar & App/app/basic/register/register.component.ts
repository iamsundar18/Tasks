import { Component, OnInit } from '@angular/core';
import { Details } from '../../details';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private locUsers: UserService) { }
  //storage: any = [];

  user = new Details('', '', '', '');

  ngOnInit(): void {
  }
  regSuccess(gett: any) {
    if (gett.invalid) {
      return;
    }
    //console.log(gett);
    this.locUsers.users.push(gett);
    console.log(this.locUsers.users);
  }

}


