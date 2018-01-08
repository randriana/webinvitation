import { Component, OnInit } from '@angular/core';

const mapViews = {
  "CHURCH_VIEW": 1,
  "HOTEL_VIEW": 2
};

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.css']
})
export class LogisticsComponent implements OnInit {

  public currentMapView: number;
  public mapViews = mapViews;


  constructor() { }

  ngOnInit() {
    this.currentMapView = this.mapViews.CHURCH_VIEW;
  }

  selectMapView( mapView ) {
    this.currentMapView = mapView;
  }
}
