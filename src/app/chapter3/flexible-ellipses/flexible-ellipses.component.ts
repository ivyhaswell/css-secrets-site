import { Component, OnInit } from '@angular/core';

let style = ''

@Component({
  selector: 'app-flexible-ellipses',
  templateUrl: './flexible-ellipses.component.html',
  // styleUrls: ['./flexible-ellipses.component.less']
  styles: [(style = `
  .cube {
    background-color: #fb3;
  }
  
  /* border-radius其实可以单独指定水平和垂直半径，通过 / 分隔。（在less等css预处理器中使用 / 要注意可能会被做运算） */
  .cube1 {
    border-radius: 100% / 50%;
  }
  
  /* 生成一个半椭圆，注意这里要将水平半径设置为50%，单纯设置100% 100% 0 0得到的形状并不是半椭圆 */
  .cube2 {
    border-radius: 50% / 100% 100% 0 0;
  }
  
  /* 同理生成一个沿纵轴剖开的半椭圆 */
  .cube3 {
    border-radius: 100% 0 0 100% / 50%;
  }
  
  /* 生成四分之一椭圆 */
  .cube4 {
    border-radius: 100% 0 0 0;
  }`)]
})
export class FlexibleEllipsesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
