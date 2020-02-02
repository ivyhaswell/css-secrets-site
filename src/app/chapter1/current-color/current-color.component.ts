import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-color',
  templateUrl: './current-color.component.html',
  styleUrls: ['./current-color.component.less']
})
export class CurrentColorComponent implements OnInit {

  constructor() { 
    this.cubeColor = this.defaultColors[0]
  }

  ngOnInit() {
  }
  cubeColor: string
  defaultColors = ['#f5222d', '#fa541c', '#fa8c16', '#faad14', '#fadb14', '#a0d911']

}
