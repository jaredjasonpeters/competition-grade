import { NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HelloComponent } from './hello.component'
import { HomepageComponent } from './pages/homepage/homepage.component'
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


