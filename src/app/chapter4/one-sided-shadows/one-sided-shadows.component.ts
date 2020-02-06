import { Component, OnInit } from '@angular/core';
import style from './one-sided-shadows.component.less'

@Component({
  selector: 'app-one-sided-shadows',
  template: `
    <div class="container">
      <div class="cube cube1"></div>
      <div class="cube cube2"></div>
      <div class="cube cube3">
        <span class="text">Text</span>
        <span class="text">Text</span>
      </div>
      <div class="cube cube4"></div>
      <div class="cube cube5"></div>
      <div class="cube cube6"></div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./one-sided-shadows.component.less']
})
export class OneSidedShadowsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
