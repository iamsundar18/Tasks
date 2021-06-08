import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  display: any;
  private count: any = 0;
  public j: any = 1;
  user: any[] = [];
  marks: any[] = [0];
  search: any = "";
  public i: any = 0;

  users: any = [{
    "name": "Sundar",
    "Age": 21,
    "Address": "VNR",
    "marks": [
      { "sem1": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem2": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem3": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem4": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem5": { "English": "190", "Maths": "170", "Tamizh": "195" } }
    ]
  },
  {
    "name": "Kilua",
    "Age": 12,
    "Address": "FAM",
    "marks": [
      { "sem1": { "English": "195", "Maths": "177", "Tamizh": "180" } },
      { "sem2": { "English": "195", "Maths": "177", "Tamizh": "180" } },
      { "sem3": { "English": "195", "Maths": "177", "Tamizh": "180" } },
      { "sem4": { "English": "195", "Maths": "177", "Tamizh": "180" } },
      { "sem5": { "English": "195", "Maths": "177", "Tamizh": "180" } }
    ]
  },
  {
    "name": "Gon",
    "Age": 15,
    "Address": "CHN",
    "marks": [
      { "sem1": { "English": "198", "Maths": "170", "Tamizh": "125" } },
      { "sem2": { "English": "198", "Maths": "170", "Tamizh": "125" } },
      { "sem3": { "English": "198", "Maths": "170", "Tamizh": "125" } },
      { "sem4": { "English": "198", "Maths": "170", "Tamizh": "125" } },
      { "sem5": { "English": "198", "Maths": "170", "Tamizh": "125" } }
    ]
  }]
  constructor() { }

  ngOnInit(): void {
  }
  add() {
    this.marks.push(++this.count);
  }

  onReg(value: any) {
    // this.user.push(value);
    // // this.mark.push(mar);
    // // this.user.push(this.mark);
    // console.log(this.user);
    console.log(this.users);

  }

  // userFound: any = false;

  Search(value: any) {
    for (var i = 0; i < this.users.length; i++) {
      if (value == this.users[i].name || value == this.users[i].Age || value == this.users[i].Address) {
        // this.userFound = true;
        this.display = i;
        console.log(this.users[i]);
        break;
      }

    }
    // if (this.userFound) alert("okay")
    // else if (!this.userFound) alert("errorrrrrrr......")
  }


}
