import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-borders',
  templateUrl: './multi-borders.component.html',
  styleUrls: ['./multi-borders.component.less']
})
export class MultiBordersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  code = `
/* box-shadow支持逗号分隔语法，可以创建任意数量的投影来实现多重边框 */
.cube1{
    box-shadow: 0 0 0 10px #655,
    0 0 0 15px deeppink,
    0 2px 5px 15px rgba(0, 0, 0, .6);
}

/* 只需要两层边框，可以用outline描边 */
.cube2{
    border: 10px solid #655;
    outline: 5px solid deeppink;
}

/* 通过outline-offset设置为复数可以简单的实现缝边效果 */
.cube3{
    background-color: #655;
    outline: 2px dashed white;
    outline-offset: -10px;
    border-radius: 6px;
}

/* outline不一定会贴合border-radius产生的圆角 */
.cube4{
    border-radius: 10px;
    outline: 4px solid #655;
}`
}
