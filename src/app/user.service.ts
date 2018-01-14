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

//TODO: delete testusers
const testUser: Family = {
  name: "Andriana",
  answered: false,
  passcode: "MLRFA",
  members: [
    { name: "Mamy Andriana"},
    { name: "Lova Andriana"},
    { name: "Rina Andriana"},
    { name: "Fitia Andriana"},
    { name: "Ainiray Andriana"}
  ],
  knownMembers: true
}

const testUser2: Family = {
  name: "Andriana",
  answered: false,
  passcode: "MLRFA",
  members: [
    { name: ""},
    { name: ""},
    { name: ""},
    { name: ""}
  ],
  knownMembers: false
}

@Injectable()
export class UserService {

  //TODO: make private and use getter and setter
  public loggedInUser: Family;
  public redirectUrl: string;

  //TODO: change back url
  //private url = 'families/';
  private url = 'http://localhost:3000/families/';

  constructor(private http: HttpClient) { }

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
