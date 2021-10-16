import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient) {
    
  }

  title = 'datingAppClient';

  ngOnInit() {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user:User = JSON.parse(localStorage.getItem('user') || '{}');
    console.log("user", user);
    
  }

  getUsers() {
    this.http.get('https://localhost:44356/api/UsersConroller').subscribe((res:any)=>{
      this.users = res;
      console.log(this.users);
    }, error=>{console.log(error);
    });
    
  }
}
