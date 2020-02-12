import { Component, OnInit } from '@angular/core';
import style from './styling-by-sibling-count.component.less'

@Component({
  selector: 'app-styling-by-sibling-count',
  templateUrl: './styling-by-sibling-count.component.html',
  styleUrls: ['./styling-by-sibling-count.component.less']
})
export class StylingBySiblingCountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style

  count = 1

  increase() {
    this.count = Math.min(this.count + 1, 8)
  }

  decrease() {
    this.count = Math.max(this.count - 1, 1)
  }

  get listItems() {
    return Array(this.count).fill(0)
  }
}
