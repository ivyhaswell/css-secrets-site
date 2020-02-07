import { Component, OnInit } from '@angular/core';
import style from './zebra-striped-text-lines.component.less'

@Component({
  selector: 'app-zebra-striped-text-lines',
  template: `
  <div class="container">
    <div class="cube cube1">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at officia ullam blanditiis. Modi temporibus libero beatae iste. Quia, corrupti. </p>
    </div>
    <div class="cube cube2">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at officia ullam blanditiis. Modi temporibus libero beatae iste. Quia, corrupti. </p>
    </div>
  </div>
  <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./zebra-striped-text-lines.component.less']
})
export class ZebraStripedTextLinesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
