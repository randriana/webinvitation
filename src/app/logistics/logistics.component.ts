import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.css']
})
export class LogisticsComponent implements OnInit {

  /* 
   * 1 = walking
   * 2 = driving
   */
  mapMode: number = 1;

  constructor() { }

  ngOnInit() {
  }

  changeMapMode( mode ) {
    this.mapMode = mode;
  }

}
