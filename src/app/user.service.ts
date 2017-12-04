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

  //private url = 'families/';
  private url = 'http://localhost:3000/families/';

  constructor(private http: HttpClient) {
    this.loggedInUser = null;
  }

  getFamilyByPasscode (): Observable<Family> {
    let url = `${this.url}MLRFA`;
    return this.http.get<Family>(url);
  }

  submitAnswer() {
    console.log(this.loggedInUser)
  }

  login(): Observable<Family> {
    let memberList: string[] = ['Mami', 'Lova', 'Rina', 'Fitia', 'Ainiray'];
    let members: Member[] = [];

    memberList.forEach( (name) => members.push(new Member(name, false)));
    let family = new Family('Andriana', false, 'MLRFA', members);
    this.loggedInUser = family;
    return this.getFamilyByPasscode();
  }

  logout(): void {
    this.loggedInUser = null;
  }
}
