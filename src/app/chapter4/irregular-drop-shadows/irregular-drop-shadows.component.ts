import { Component, OnInit } from '@angular/core';
import style from './irregular-drop-shadows.component.less'

@Component({
  selector: 'app-irregular-drop-shadows',
  template: `
    <div class="container">
      <div class="cube bubble shadow">bubble</div>
      <div class="cube dotted-border shadow">Dotted Border</div>
      <div class="cube cutout-corners shadow">Cutout Corners</div>
      <div class="cube clip-path shadow">Clip Path</div>

      <div class="cube bubble filter-shadow">bubble</div>
      <div class="cube dotted-border filter-shadow">Dotted Border</div>
      <div class="cube cutout-corners filter-shadow">Cutout Corners</div>
      <div class="cube clip-path filter-shadow">Clip Path</div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./irregular-drop-shadows.component.less'],
})
export class IrregularDropShadowsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
