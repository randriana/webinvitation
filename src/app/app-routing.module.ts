import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { MarriageComponent } from './marriage/marriage.component';
import { RsvpComponent } from './rsvp/rsvp.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'logistics', component: LogisticsComponent },
  { path: 'marriage', component: MarriageComponent },
  { path: 'rsvp', component: RsvpComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
