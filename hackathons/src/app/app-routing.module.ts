import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HackathonsComponent } from './hackathons/hackathons.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent, pathMatch: 'full'},
    { path: 'hackathons', component: HackathonsComponent, pathMatch: 'full'}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }