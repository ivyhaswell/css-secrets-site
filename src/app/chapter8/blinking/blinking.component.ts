import { Component, OnInit } from '@angular/core';
import style from './blinking.component.less'

@Component({
  selector: 'app-blinking',
  templateUrl: './blinking.component.html',
  styleUrls: ['./blinking.component.less']
})
export class BlinkingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
