import { Component, OnInit } from '@angular/core';
import style from './ligatures.component.less'

@Component({
  selector: 'app-ligatures',
  template: `
    <div class="container">
      <div class="cube cube1">fi ff fl ffi ffl st ct</div>
      <div class="cube cube2">fi ff fl ffi ffl st ct</div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./ligatures.component.less']
})
export class LigaturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
