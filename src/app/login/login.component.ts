import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { UserService } from '../user.service';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passcode: string;
  error: string;

  constructor(public userService: UserService, public router: Router, public settings: SettingsService) {
    this.passcode = "";
  }

  ngOnInit() {
  }

  setLanguage(e) {
    let lang = e.target.dataset.lang;
    this.settings.language = lang;
  }

  //TODO add form validator here
  login(): void {
    this.userService.login(this.passcode).subscribe((user) => {
      if (user) {
        this.userService.loggedInUser = user;
        const redirect = this.userService.redirectUrl ? this.userService.redirectUrl : '/invitation';
        this.router.navigate([redirect]);
      }
    },
    error => this.error = error.error);
  }

}
