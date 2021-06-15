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
  upload: any;

  openFakeDate() {
    this.ud.getpost().subscribe(data => {
      this.fakedData = data;
    })
  }

  onFile(receive: any) {
    this.upload = receive.target.files;
    console.log(this.upload);
  }

  onUpload() {
    this.ud.filePost(this.upload).subscribe(data => {
      console.log(this.upload);
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
