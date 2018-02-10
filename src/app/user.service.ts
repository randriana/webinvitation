import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Promise } from 'q';

import { Family } from './family';
import { Member } from './family';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  public loggedInUser: Family;
  public redirectUrl: string;

  private url = 'http://46.101.120.12/families/';

  constructor(private http: HttpClient) {
  }

  getFamilyByPasscode(passcode: string): Observable<Family> {
    const url = `${this.url}${passcode}`;
    return this.http.get<Family>(url);
  }

  submitAnswer() {
    const url = `${this.url}/submitAnswer`;
    return this.http.put(url, this.loggedInUser);
  }

  login(passcode: string): Observable<Family> {
    return this.getFamilyByPasscode(passcode.toLocaleUpperCase());
  }

  logout(): void {
    this.loggedInUser = null;
  }
}
