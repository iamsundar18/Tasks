import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emaill: any = '';
  passw: any = '';

  constructor(private storeDetails: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  userFound: any;
  userPassword: any;
  // @Output() mypass: any = new EventEmitter();
  // pass: any;

  login(gett: any) {
    this.userFound = false;
    this.userPassword = false;
    //console.log(gett.value);
    for (var i = 0; i < this.storeDetails.users.length; i++) {
      if (this.emaill == this.storeDetails.users[i].mail) {
        this.userFound = true;
        if (this.passw == this.storeDetails.users[i].pass) {
          this.userPassword = true;
          this.storeDetails.pass = this.storeDetails.users[i];
        }
        break;
      }
    }
    if (this.userFound && this.userPassword) {
      alert("Logged in Successfully..");
      this.router.navigateByUrl('User-detail');
    }
    else if (this.userFound && !this.userPassword) alert("Password wrong..")
    else {
      alert("Invalid name");
    }

  }

  imgUrl: string = 'https://res.cloudinary.com/dm7lrw0hf/image/upload/v1623828685/zpn90g554gstm41gdcl1.jpg';

  imageToShow: any;
  isImageLoading: any;

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.storeDetails.getImage(this.imgUrl).subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }




}
