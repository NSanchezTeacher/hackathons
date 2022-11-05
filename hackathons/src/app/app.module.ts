import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HackathonsComponent } from './hackathons/hackathons.component';
import { MainComponent } from './main/main.component';
import { MenubarComponent } from './basic/menubar/menubar.component';

import {MenubarModule} from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    HackathonsComponent,
    MainComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TableModule,
    TagModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
