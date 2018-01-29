import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { LanguageService } from './language.service';


import { LoginComponent } from './login/login.component';
import { InvitationViewComponent } from './invitation-view/invitation-view.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { MarriageComponent } from './marriage/marriage.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { RsvpComponent } from './rsvp/rsvp.component';

import { AttendingPipe } from './attending.pipe';
import { TranslatePipe } from './translate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InvitationViewComponent,
    AttendingPipe,
    HomeComponent,
    HistoryComponent,
    MarriageComponent,
    LogisticsComponent,
    RsvpComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuardService, UserService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
