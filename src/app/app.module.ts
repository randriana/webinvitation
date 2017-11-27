import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { MarriageComponent } from './marriage/marriage.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { RsvpComponent } from './rsvp/rsvp.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    MarriageComponent,
    LogisticsComponent,
    RsvpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
