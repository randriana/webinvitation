import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  
  constructor(public userService: UserService, public router: Router) {
    this.setMessage();
  }

  ngOnInit() {
  }

  setMessage() {
    this.message = 'Logged ' + (this.userService.loggedInUser ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
 
    this.userService.login().then(( ) => {
      this.setMessage();
      
      if (this.userService.loggedInUser) {
        let redirect = this.userService.redirectUrl ? this.userService.redirectUrl : '/invitation';
 
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.userService.logout();
    this.setMessage();
  }
}
