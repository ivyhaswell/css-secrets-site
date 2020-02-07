import { Component, OnInit } from '@angular/core';
import style from './adjusting-tab-width.component.less'

@Component({
  selector: 'app-adjusting-tab-width',
  template: `
    <div class="container">
      <div class="cube cube1">
        <pre>{{text}}</pre>
      </div>
      <div class="cube cube2">
        <pre>{{text}}</pre>
      </div>
      <div class="cube cube3">
        <pre>{{text}}</pre>
      </div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./adjusting-tab-width.component.less']
})
export class AdjustingTabWidthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* 在这里手动使用String.fromCharCode(9)来生成tab，否则会被自动转换成空格 */
  text = `
function *foo() {
${String.fromCharCode(9)}let a = 1;
${String.fromCharCode(9)}let b = yield a;
${String.fromCharCode(9)}return b
}`

  code = style
}
