import { Component, OnInit } from '@angular/core';

import { Family } from '../family';

import { UserService } from '../user.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  public user: Family;

  constructor(public userService: UserService) {
    this.user = userService.loggedInUser;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.user.answered = true;
    this.userService.submitAnswer().subscribe();
  }

  onSubmitUnknown() {
    this.user.answered = true;
    this.user.members.forEach( member => member.attending = member.name ? true : false);
    this.userService.submitAnswer().subscribe();
  }
}
