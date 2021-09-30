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

@NgModule({
  declarations: [
    AppComponent,
    DbconnectComponent,
    LoginBoxComponent,
    HeaderComponent,
    LoginButtonComponent,
    RoomTableComponent,
    DocumentPanelComponent
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
