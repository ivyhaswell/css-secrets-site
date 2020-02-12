import { Component, OnInit } from '@angular/core';
import style from './elastic-transitions.component.less'

@Component({
  selector: 'app-elastic-transitions',
  templateUrl: './elastic-transitions.component.html',
  styleUrls: ['./elastic-transitions.component.less']
})
export class ElasticTransitionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  classNames = ['playground1', 'playground2', 'playground3']

  replay(index: number) {

    let cn = this.classNames[index]
    this.classNames[index] = ''
    setTimeout(() => {
      this.classNames[index] = cn
    }, 0);
  }

  code = style
}
