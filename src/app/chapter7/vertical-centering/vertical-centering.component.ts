import { Component, OnInit } from '@angular/core';
import style from './vertical-centering.component.less'

@Component({
  selector: 'app-vertical-centering',
  templateUrl: './vertical-centering.component.html',
  styleUrls: ['./vertical-centering.component.less']
})
export class VerticalCenteringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cube2_fixed = false

  toggleCube2Fixed() {
    this.cube2_fixed = !this.cube2_fixed
  }

  code = style
}
