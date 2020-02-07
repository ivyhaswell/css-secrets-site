import { Component, OnInit } from '@angular/core';
import style from './inserting-line-breaks.component.less'

@Component({
  selector: 'app-inserting-line-breaks',
  template: `
  <div class="container">
    <div [class]="'cube cube'+(i+1)" *ngFor="let item of loops;let i = index">
      <dl>
        <dt>Name:</dt>
        <dd>Leon Mathilda</dd>

        <dt>Email:</dt>
        <dd>Leon1@gmail.com</dd>
        <dd>Leon2@gmail.com</dd>

        <dt>Location:</dt>
        <dd>Earth</dd>
      </dl>
    </div>
  </div>
  <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./inserting-line-breaks.component.less']
})
export class InsertingLineBreaksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loops = Array(3).fill(0)

  code = style

}
