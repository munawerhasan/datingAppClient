import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
 // users: any;

  constructor() { }

  ngOnInit(): void {
    //parent to child
    //this.getUsers();
  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }
  // getUsers() {
  //   this.http.get('https://localhost:44356/api/UsersConroller').subscribe((res:any)=>{
  //     this.users = res;
  //   })
  // }
  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
  
}
