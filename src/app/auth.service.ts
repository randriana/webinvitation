import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Promise } from 'q';

@Injectable()
export class AuthService {

  isLoggedIn = false;
  
  redirectUrl: string;

  login(): Promise<boolean> {
    return Promise(( resolve, reject )=>{
      resolve( this.isLoggedIn = true );
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}
