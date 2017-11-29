import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

import { LoginComponent } from './login/login.component';
import { InvitationViewComponent } from './invitation-view/invitation-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/invitation', pathMatch: 'full' },
  { path: 'invitation', component: InvitationViewComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
