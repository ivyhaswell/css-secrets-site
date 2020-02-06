import { Component, OnInit } from '@angular/core';
import style from './trapezoid-tabs.component.less'

@Component({
  selector: 'app-trapezoid-tabs',
  template: `
    <div class="container">
      <div class="cube cube1">Trapezoid</div>
      <div class="cube cube2">Trapezoid</div>
      <div class="cube cube3">Trapezoid</div>
      <div class="cube cube4">Trapezoid</div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./trapezoid-tabs.component.less'],
})
export class TrapezoidTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
