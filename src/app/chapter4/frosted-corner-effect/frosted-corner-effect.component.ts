import { Component, OnInit } from '@angular/core';
import style from './frosted-corner-effect.component.less'

@Component({
  selector: 'app-frosted-corner-effect',
  template: `
  <div class="container">
    <div [class]="'cube cube' + (i+1)" *ngFor="let item of loops;let i = index">
      Gather thee rosebuds while ye may
    </div>
  </div>
  <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./frosted-corner-effect.component.less']
})
export class FrostedCornerEffectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loops = Array(5).fill(0)

  code = style
}
