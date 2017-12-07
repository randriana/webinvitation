import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  doBlock = false;
  minViewportSize = 675;

  ngOnInit() {
    let viewportWidth = window.innerWidth;

    if ( viewportWidth < this.minViewportSize ) {
      this.doBlock = true;
    }

    this._doRunMobileBlocker();
  }

  _doRunMobileBlocker(): void {
    window.onresize = () => {
      if ( window.innerWidth < this.minViewportSize ) {
        this.doBlock = true;
      } else {
        this.doBlock = false;
      }
    }
  }
}
