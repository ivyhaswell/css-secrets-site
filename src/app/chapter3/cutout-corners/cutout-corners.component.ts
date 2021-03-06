import { Component, OnInit } from '@angular/core';
import style from './cutout-corners.component.less'

@Component({
  selector: 'app-cutout-corners',
  template: `
    <div class="container">
      <div class="cube cube1"></div>
      <div class="cube cube2"></div>
      <div class="cube cube3"></div>
      <div class="cube cube4"></div>
      <div class="cube cube5"></div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./cutout-corners.component.less']
})
export class CutoutCornersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
