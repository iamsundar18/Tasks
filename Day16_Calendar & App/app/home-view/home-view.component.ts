import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  localArray: any = [];

  viewCards() {
    this.service.getAppJson().subscribe(data => {
      this.localArray = data;
      console.log(data);
    })
  }

}
