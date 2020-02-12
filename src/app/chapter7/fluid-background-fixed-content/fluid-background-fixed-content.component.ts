import { Component, OnInit } from '@angular/core';
import style from './fluid-background-fixed-content.component.less'

@Component({
  selector: 'app-fluid-background-fixed-content',
  templateUrl: './fluid-background-fixed-content.component.html',
  styleUrls: ['./fluid-background-fixed-content.component.less']
})
export class FluidBackgroundFixedContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
