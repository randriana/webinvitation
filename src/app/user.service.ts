import { Injectable } from '@angular/core';
import { Promise } from 'q';


@Injectable()
export class UserService {

  loggedInUser = null;
  
  redirectUrl: string;

  login(): Promise<object> {
    return Promise(( resolve, reject )=>{
      resolve( this.loggedInUser = {
        "name" : "Testesen",
        "passcode" : "TOKRF",
        "members" : [ 
            {
                "answered" : false,
                "attendint" : false,
                "name" : "Test"
            }, 
            {
                "answered" : false,
                "attendint" : false,
                "name" : "Kari"
            }, 
            {
                "answered" : false,
                "attendint" : false,
                "name" : "Ola"
            }
        ]
    } );
    });
  }

  logout(): void {
    this.loggedInUser = null;
  }
}
