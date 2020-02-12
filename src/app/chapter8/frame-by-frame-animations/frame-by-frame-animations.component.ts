import { Component, OnInit } from '@angular/core';
import style from './frame-by-frame-animations.component.less'

@Component({
  selector: 'app-frame-by-frame-animations',
  templateUrl: './frame-by-frame-animations.component.html',
  styleUrls: ['./frame-by-frame-animations.component.less']
})
export class FrameByFrameAnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
