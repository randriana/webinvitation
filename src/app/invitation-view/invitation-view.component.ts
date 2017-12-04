import { Component, OnInit } from '@angular/core';
import { VIEWS } from '../views';

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
