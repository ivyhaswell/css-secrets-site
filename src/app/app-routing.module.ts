import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chapter1Component } from './chapter1/chapter1.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { Chapter3Component } from './chapter3/chapter3.component';
import { Chapter4Component } from './chapter4/chapter4.component';
import { Chapter5Component } from './chapter5/chapter5.component';


const routes: Routes = [
  { path: '01', component: Chapter1Component },
  { path: '02', component: Chapter2Component },
  { path: '03', component: Chapter3Component },
  { path: '04', component: Chapter4Component },
  { path: '05', component: Chapter5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
