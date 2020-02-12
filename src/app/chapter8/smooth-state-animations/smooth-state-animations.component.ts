import { Component, OnInit } from '@angular/core';
import style from './smooth-state-animations.component.less'

@Component({
  selector: 'app-smooth-state-animations',
  templateUrl: './smooth-state-animations.component.html',
  styleUrls: ['./smooth-state-animations.component.less']
})
export class SmoothStateAnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
