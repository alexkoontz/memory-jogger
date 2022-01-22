import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AddUserPanelComponent } from './components/add-user-panel/add-user-panel.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { UsersPanelComponent } from './components/users-panel/users-panel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginBoxComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin/users', component: UsersPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
