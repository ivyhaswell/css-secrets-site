import { Component, OnInit } from '@angular/core';
import style from './circular-text.component.less'

@Component({
  selector: 'app-circular-text',
  template: `
    <div class="container">
      <div class="circular">
        <svg viewBox="0 0 100 100">
          <path d="M0,50 a50,50 0 1,1 0,1z" id="circle"></path>
          <text>
            <textPath xlink:href="#circle">
	            Lorem ipsum dolor sit amet consectetur utukimily.
            </textPath>
          </text>
        </svg>
        <!-- <svg viewBox="0 0 100 100">
          <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
          <text>
            <textPath xlink:href='#circle'>circular reasoning works because</textPath>
          </text>
        </svg> -->
      </div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./circular-text.component.less']
})
export class CircularTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
