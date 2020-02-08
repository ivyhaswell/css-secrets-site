import { Component, OnInit } from '@angular/core';
import style from './fancy-ampersands.component.less'

@Component({
  selector: 'app-fancy-ampersands',
  template: `
    <div class="container">
      <div class="cube cube1">
        HTML <span class="amp">&amp;</span> CSS
      </div>
      <div class="cube cube2">
        HTML <span class="amp">&amp;</span> CSS
      </div>
      <div class="cube cube3">
        HTML &amp; CSS
      </div>
      <div class="cube cube4">
        HTML &amp; CSS
      </div>
      <div class="cube cube5">
        HTML &amp; CSS
      </div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./fancy-ampersands.component.less']
})
export class FancyAmpersandsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
