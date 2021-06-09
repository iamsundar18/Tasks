import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: any;
  submitted = false;

  gend = ["Male", "Female", "Custom"];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      mail: ['', Validators.required],
      pnum: ['', Validators.required],
      age: ['', Validators.required],
      gender: [this.gend[0], Validators.required],
      qul: ['', Validators.required]
    });

  }
  get f() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
      return;
    }
    alert("Welcome...");
    console.log(this.myForm);
  }

  // display: any;
  // private count: any = 0;
  // public j: any = 1;
  // user: any[] = [];
  // marks: any[] = [0];
  // search: any = "";
  // public i: any = 0;

  // users: any = [{
  //   "name": "Sundar",
  //   "Age": 21,
  //   "Address": "VNR",
  //   "marks": [
  //     { "sem1": { "English": "190", "Maths": "170", "Tamizh": "195" } },
  //     { "sem2": { "English": "190", "Maths": "170", "Tamizh": "195" } },
  //     { "sem3": { "English": "190", "Maths": "170", "Tamizh": "195" } }
  //   ]
  // },
  // {
  //   "name": "Kilua",
  //   "Age": 12,
  //   "Address": "FAM",
  //   "marks": [
  //     { "sem1": { "English": "195", "Maths": "177", "Tamizh": "180" } },
  //     { "sem2": { "English": "195", "Maths": "177", "Tamizh": "180" } },
  //     { "sem3": { "English": "195", "Maths": "177", "Tamizh": "180" } }
  //   ]
  // },
  // {
  //   "name": "Gon",
  //   "Age": 15,
  //   "Address": "CHN",
  //   "marks": [
  //     { "sem1": { "English": "198", "Maths": "170", "Tamizh": "125" } },
  //     { "sem2": { "English": "198", "Maths": "170", "Tamizh": "125" } },
  //     { "sem3": { "English": "198", "Maths": "170", "Tamizh": "125" } }
  //   ]
  // }]
  // add() {
  //   this.marks.push(++this.count);
  // }

  // onReg(value: any) {
  //   // this.user.push(value);
  //   // // this.mark.push(mar);
  //   // // this.user.push(this.mark);
  //   // console.log(this.user);
  //   // console.log(this.users);

  // }

  // userFound: any = false;

  // Search(value: any) {
  //   for (var i = 0; i < this.users.length; i++) {
  //     if (value == this.users[i].name || value == this.users[i].Age || value == this.users[i].Address) {
  //       // this.userFound = true;
  //       this.display = i;
  //       console.log(this.users[i]);
  //       break;
  //     }

  //   }
  // if (this.userFound) alert("okay")
  // else if (!this.userFound) alert("errorrrrrrr......")
}
