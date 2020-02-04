import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transparent-border',
  templateUrl: './transparent-border.component.html',
  styleUrls: ['./transparent-border.component.less']
})
export class TransparentBorderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  code = `
.cube1{
    border-color: hsla(0,0%,100%,.5);
}

.cube2{
    border-color: hsla(0,0%,100%,.5);
    background-clip: padding-box;
    /* 默认情况下，背景会延伸到边框所在的区域下层。通过background-clip可以调整这种默认行为 */
}
  `
}
