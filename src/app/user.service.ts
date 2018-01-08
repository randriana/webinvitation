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

const testUser: Family = {
  name: "Andriana",
  answered: false,
  passcode: "MLRFA",
  members: [
    { name: "Mamy Andriana", attending: false },
    { name: "Lova Andriana", attending: false },
    { name: "Rina Andriana", attending: false },
    { name: "Fitia Andriana", attending: false },
    { name: "Ainiray Andriana", attending: false }
  ],
  knownMembers: true
}

@Injectable()
export class UserService {

  public loggedInUser: Family;
  public redirectUrl: string;

  //private url = 'families/';
  private url = 'http://localhost:3000/families/';

  constructor(private http: HttpClient) {
    this.loggedInUser = testUser;
  }

  getFamilyByPasscode(passcode: string): Observable<Family> {
    let url = `${this.url}${passcode}`;
    return this.http.get<Family>(url);
  }

  submitAnswer() {
    let url = `${this.url}/submitAnswer`;
    return this.http.put(url, this.loggedInUser);
  }

  login(passcode: string): Observable<Family> {
    return this.getFamilyByPasscode(passcode.toLocaleUpperCase());
  }

  logout(): void {
    this.loggedInUser = null;
  }
}
