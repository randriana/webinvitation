import { Component, OnInit } from '@angular/core';

import { Family } from '../family';

import { UserService } from '../user.service';


@Component({
  selector: 'app-invitation-view',
  templateUrl: './invitation-view.component.html',
  styleUrls: ['./invitation-view.component.css']
})
export class InvitationViewComponent implements OnInit {

  public user: Family;

  constructor(public userService: UserService) {
    this.user = userService.loggedInUser;
  }

  ngOnInit() {
  }

  scrollToBottom() {
    window.scrollBy(0, 175);
  }
}
