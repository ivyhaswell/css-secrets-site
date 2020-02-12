import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chapter1Component } from './chapter1/chapter1.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { Chapter3Component } from './chapter3/chapter3.component';
import { Chapter4Component } from './chapter4/chapter4.component';
import { Chapter5Component } from './chapter5/chapter5.component';
import { Chapter6Component } from './chapter6/chapter6.component';
import { Chapter7Component } from './chapter7/chapter7.component';
import { Chapter8Component } from './chapter8/chapter8.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '01', component: Chapter1Component },
  { path: '02', component: Chapter2Component },
  { path: '03', component: Chapter3Component },
  { path: '04', component: Chapter4Component },
  { path: '05', component: Chapter5Component },
  { path: '06', component: Chapter6Component },
  { path: '07', component: Chapter7Component },
  { path: '08', component: Chapter8Component },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
