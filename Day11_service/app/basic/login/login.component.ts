import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emaill: any = '';
  passw: any = '';

  constructor(private storeDetails: UserService) { }

  ngOnInit(): void {
  }
  userFound: any;
  userPassword: any;

  login(gett: any) {
    this.userFound = false;
    this.userPassword = false;
    //console.log(gett.value);
    for (var i = 0; i < this.storeDetails.users.length; i++) {
      if (this.emaill == this.storeDetails.users[i].mail) {
        this.userFound = true;
        if (this.passw == this.storeDetails.users[i].pass) {
          this.userPassword = true;
        }
        break;
      }
    }
    if (this.userFound && this.userPassword) alert("Successfully login..")
    else if (this.userFound && !this.userPassword) alert("Password wrong..")
    else {
      alert("Invalid name");
    }

  }

}
