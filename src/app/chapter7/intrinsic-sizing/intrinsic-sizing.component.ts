import { Component, OnInit } from '@angular/core';
import style from './intrinsic-sizing.component.less'

@Component({
  selector: 'app-intrinsic-sizing',
  templateUrl: './intrinsic-sizing.component.html',
  styleUrls: ['./intrinsic-sizing.component.less']
})
export class IntrinsicSizingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style

}
