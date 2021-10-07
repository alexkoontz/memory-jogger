import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbconnectComponent } from './components/dbconnect/dbconnect.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { RoomTableComponent } from './components/room-table/room-table.component';
import { DocumentPanelComponent } from './components/document-panel/document-panel.component';
import { AddUserPanelComponent } from './components/add-user-panel/add-user-panel.component';
import { DeleteUserPanelComponent } from './components/delete-user-panel/delete-user-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DbconnectComponent,
    LoginBoxComponent,
    HeaderComponent,
    LoginButtonComponent,
    RoomTableComponent,
    DocumentPanelComponent,
    AddUserPanelComponent,
    DeleteUserPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
