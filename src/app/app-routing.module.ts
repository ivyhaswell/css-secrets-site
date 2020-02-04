import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chapter1Component } from './chapter1/chapter1.component';
import { Chapter2Component } from './chapter2/chapter2.component';


const routes: Routes = [
  { path: '01', component: Chapter1Component },
  { path: '02', component: Chapter2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
