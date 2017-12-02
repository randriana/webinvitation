import { Injectable } from '@angular/core';
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
