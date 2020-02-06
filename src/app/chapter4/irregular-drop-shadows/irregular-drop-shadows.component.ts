import { Component, OnInit } from '@angular/core';
import style from './irregular-drop-shadows.component.less'

@Component({
  selector: 'app-irregular-drop-shadows',
  template: `
    <div class="container">
      <div class="cube bubble">bubble</div>
      <div class="cube cube2"></div>
      <div class="cube cube3"></div>
      <div class="cube cube4"></div>
      <div class="cube cube5"></div>
      <div class="cube cube6"></div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./irregular-drop-shadows.component.less'],
})
export class IrregularDropShadowsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
