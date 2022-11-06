import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HackathonsComponent } from './hackathons/hackathons.component';
import { MainComponent } from './main/main.component';
import { MenubarComponent } from './basic/menubar/menubar.component';

import {MenubarModule} from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';


import { HackathonsPresenter } from './hackathons/hackathons.presenter';
import { HttpService } from './services/http.service'; 

@NgModule({
  declarations: [
    AppComponent,
    HackathonsComponent,
    MainComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MenubarModule,
    TableModule,
    CardModule,
    ButtonModule,
    DialogModule
  ],
  providers: [
    HackathonsPresenter, 
    HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
