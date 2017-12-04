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
  
  constructor(public userService: UserService, public router: Router) {}

  ngOnInit() {
  }

  login():void {
    this.userService.login().subscribe((user) => {
      if (user) {
        this.userService.loggedInUser = user;
        let redirect = this.userService.redirectUrl ? this.userService.redirectUrl : '/invitation';
        this.router.navigate([redirect]);
      }
    });
  }

}
