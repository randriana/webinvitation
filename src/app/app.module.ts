import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { AuthGuardService } from './auth-guard.service';
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
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
