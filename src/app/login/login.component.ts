import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import { UserService } from '../user.service';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passcode: string;
  error: string;
  placeholderText: string = this.languageService.translations.LOGIN_INPUT_PLACEHOLDER[this.languageService.activeLanguage];

  constructor(public userService: UserService, public router: Router, public languageService: LanguageService) {
    this.passcode = '';
  }

  ngOnInit() {
  }

  setLanguage(e) {
    const lang = e.target.dataset.lang;
    this.languageService.activeLanguage = lang;
  }

  // TODO add form validator here
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
