import { Component, OnInit } from '@angular/core';
import style from './interactive-image-comparison.component.less'

@Component({
  selector: 'app-interactive-image-comparison',
  templateUrl: './interactive-image-comparison.component.html',
  styleUrls: ['./interactive-image-comparison.component.less']
})
export class InteractiveImageComparisonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  range = 50

  code = style
}
