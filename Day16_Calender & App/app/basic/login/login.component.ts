import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private storeUsers: UserService) { }
  emaill: any = '';
  password: any = '';
  // store: any = this.storeUsers.users;

  userFound: any;
  userFoundPass: any;

  login() {
    this.userFound = false;
    this.userFoundPass = false;
    //  console.log(getting);
    for (var i = 0; i < this.storeUsers.users.length; i++) {
      if (this.emaill == this.storeUsers.users[i].email) {
        this.userFound = true;
        if (this.password == this.storeUsers.users[i].pass) {
          this.userFoundPass = true;
        }
        break;
      }
    }
    if (this.userFound && this.userFoundPass) alert("Successfully logined");
    else if (this.userFound && !this.userFoundPass) alert("Password wrong")
    else {
      alert("User name not found");
    }


    // console.log(this.store);
  }

  ngOnInit(): void {
  }

}
