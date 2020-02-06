import { Component, OnInit } from '@angular/core';
import style from './parallelograms.component.less'

@Component({
  selector: 'app-parallelograms',
  template: `
  <div class="container">
    <div class="cube cube1"></div>
    <div class="cube cube2">
      <div class="text">Alchemy</div>
    </div>
    <div class="cube cube3"></div>
  </div>
  <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./parallelograms.component.less'],
})
export class ParallelogramsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
