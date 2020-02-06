import { Component, OnInit } from '@angular/core';
import style from './flexible-ellipses.component.less'

@Component({
  selector: 'app-flexible-ellipses',
  templateUrl: './flexible-ellipses.component.html',
  styleUrls: ['./flexible-ellipses.component.less']
})
export class FlexibleEllipsesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
