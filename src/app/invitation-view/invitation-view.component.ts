import { Component, OnInit } from '@angular/core';

import { Family }    from '../family';
import { VIEWS } from '../views';
import { View } from '../views';

import { UserService } from '../user.service';


@Component({
  selector: 'app-invitation-view',
  templateUrl: './invitation-view.component.html',
  styleUrls: ['./invitation-view.component.css']
})
export class InvitationViewComponent implements OnInit {

  public views: View[];
  public activeView: string;
  public user: Family;

  constructor(public userService: UserService) {
    this.user = userService.loggedInUser;
    this.activeView = 'home';
    this.views = VIEWS;
  }

  ngOnInit() {
  }

  selectView(id: string): void {
    this.activeView = id;
  }

  onSubmit() {
    this.user.answered = true;
    this.userService.submitAnswer();
  }


}
