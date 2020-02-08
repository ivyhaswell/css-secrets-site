import { Component, OnInit } from '@angular/core';
import style from './realistic-text-effects.component.less'

@Component({
  selector: 'app-realistic-text-effects',
  template: `
    <div class="container">
      <div class="cube cube1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, delectus?</div>
      <div class="cube cube2">CSS</div>
      <div class="cube cube3">CSS</div>
      <div class="cube cube4">CSS</div>
      <div class="cube cube5">
        <svg width='2em' height='1.2em'>
          <use xlink:href='#css'/>
          <text id='css' y='1em'>CSS</text>
        </svg>
      </div>
      <div class="cube cube6">GLOW</div>
      <div class="cube cube7">CSS3d</div>
      <div class="cube cube8">RETRO</div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./realistic-text-effects.component.less']
})
export class RealisticTextEffectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
