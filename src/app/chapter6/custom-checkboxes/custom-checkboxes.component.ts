import { Component, OnInit } from '@angular/core';
import style from './custom-checkboxes.component.less'

@Component({
  selector: 'app-custom-checkboxes',
  templateUrl: './custom-checkboxes.component.html',
  styleUrls: ['./custom-checkboxes.component.less']
})
export class CustomCheckboxesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
