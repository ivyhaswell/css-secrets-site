import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-rounding',
  templateUrl: './inner-rounding.component.html',
  styleUrls: ['./inner-rounding.component.less']
})
export class InnerRoundingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  code = `
/* 用两个元素的话很容易就可以实现 */
.cube1{
    background-color: #655;
    padding: .8em;
    .inner-cube{
        background-color: tan;
        border-radius: .8em;
        padding: 1em;
    }
}

/* 如果使用单元素，可以用outline + box-shadow的方法。outline不会跟着圆角走，四个角产生的空隙再由box-shadow来填充 */
.cube2{
    background-color: tan;
    border-radius: .8em;
    padding: 1em;
    box-shadow: 0 0 0 .6em #655;
    outline: .8em solid #655;
}
`
}
