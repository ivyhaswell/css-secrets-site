import { Component, OnInit } from '@angular/core';
import style from './custom-underlines.component.less'

@Component({
  selector: 'app-custom-underlines',
  template: `
    <div class="container">
      <div [class]="'cube cube'+(i+1)" *ngFor="let item of loops;let i = index">
        Lorem ipsum dolor <span>sit amet consectetur adipisicing elit. Nesciunt aliquam vero sunt mollitia esse corporis assumenda</span> quos unde totam labore.
      </div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./custom-underlines.component.less']
})
export class CustomUnderlinesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loops = Array(5).fill(0)

  code = style
}
