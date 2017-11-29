import { Component, OnInit } from '@angular/core';

const VIEWS: object[] = [
  { id: 'home', text: 'ACCUEIL'},
  { id: 'history', text: 'HISTOIRE' }, 
  { id: 'marriage', text: 'MARIAGE' },
  { id: 'logistics', text: 'LOGISTIQUE' },
  { id: 'rsvp', text: 'RSVP' }
];

@Component({
  selector: 'app-invitation-view',
  templateUrl: './invitation-view.component.html',
  styleUrls: ['./invitation-view.component.css']
})
export class InvitationViewComponent implements OnInit {


  public views: object[] = VIEWS;
  public activeView: string = 'home';


  constructor() { 
  }

  ngOnInit() {
  }

  selectView(id: string): void {
    this.activeView = id;
  }


}
