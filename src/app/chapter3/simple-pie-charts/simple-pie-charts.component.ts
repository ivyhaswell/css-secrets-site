import { Component, OnInit } from '@angular/core';
import style from './simple-pie-charts.component.less'

@Component({
  selector: 'app-simple-pie-charts',
  template: `
    <div class="container">
      <div class="pie pie1"></div>
      <div class="pie pie2"></div>
      <div class="pie pie3"></div>
      <div class="pie pie4" style="animation-delay: -20s"></div>
      <div class="pie pie4" style="animation-delay: -60s"></div>
      <svg width="100" height="100" class="pie5">
        <circle r="25" cx="50" cy="50" />
      </svg>
      <svg width="100" height="100" class="pie6">
        <circle r="25" cx="50" cy="50" />
      </svg>
      <div class="pie pie7"></div>
      <div class="pie pie8"></div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./simple-pie-charts.component.less'],
})
export class SimplePieChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
