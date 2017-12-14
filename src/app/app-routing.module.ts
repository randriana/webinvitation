import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

import { LoginComponent } from './login/login.component';
import { InvitationViewComponent } from './invitation-view/invitation-view.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { MarriageComponent } from './marriage/marriage.component';
import { LogisticsComponent} from './logistics/logistics.component';
import { RsvpComponent} from './rsvp/rsvp.component';

const routes: Routes = [
  { path: '', redirectTo: '/invitation/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'invitation', component: InvitationViewComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'marriage', component: MarriageComponent },
      { path: 'logistics', component: LogisticsComponent },
      { path: 'rsvp', component: RsvpComponent },
    ]},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
