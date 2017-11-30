import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';


import { LoginComponent } from './login/login.component';
import { InvitationViewComponent } from './invitation-view/invitation-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InvitationViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
