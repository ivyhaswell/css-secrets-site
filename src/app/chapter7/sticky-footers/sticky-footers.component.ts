import { Component, OnInit } from '@angular/core';
import style from './sticky-footers.component.less'

@Component({
  selector: 'app-sticky-footers',
  templateUrl: './sticky-footers.component.html',
  styleUrls: ['./sticky-footers.component.less']
})
export class StickyFootersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
