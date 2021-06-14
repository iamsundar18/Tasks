import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {



  constructor(private ud: UserService, private back: Router, private location: Location) { }

  gend = ["Male", "Female", "Custom"];
  loc: any = this.ud.pass;
  detail: any;
  ngOnInit(): void {
  }

  fakedData: any = [];

  openFakeDate() {
    this.ud.getpost().subscribe(data => {
      this.fakedData = data;
    })
  }

  goBack() {
    this.back.navigateByUrl('Login-page');
  }

  editInfo() {
    this.detail = this.loc;
  }
  updInfo() {
    this.location.back();
    alert("Successfully Updated...");
    console.log(this.ud.users);
  }
}
