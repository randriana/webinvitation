import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';


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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
