import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex-background-patterns',
  templateUrl: './complex-background-patterns.component.html',
  styleUrls: ['./complex-background-patterns.component.less']
})
export class ComplexBackgroundPatternsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = `
  /* 将水平和垂直条纹结合起来，就可以形成网格 */
  .cube1 {
      @color          : rgba(200, 0, 0, 0.5);
      background-color: white;
      background-image: linear-gradient(90deg, @color 50%, transparent 0),
          linear-gradient(@color 50%, transparent 0);
      background-size: 30px 30px;
  }
  
  /* 还可以将两个网格图案结合起来组成更复杂的网格 */
  .cube2 {
      @lineColor      : hsla(0%, 0%, 100%, 0.3);
      background-color: #58a;
      background-image: linear-gradient(white 2px, transparent 0),
          linear-gradient(90deg, white 2px, transparent 0),
          linear-gradient(@lineColor 1px, transparent 0),
          linear-gradient(90deg, @lineColor 1px, transparent 0);
      background-size: 45px 45px, 45px 45px, 15px 15px, 15px 15px;
  }
  
  /* 通过两层圆点阵列，可以组成波点图案 */
  .cube3 {
      background-color: #655;
      @dotColor       : tan;
      background-image: radial-gradient(@dotColor 30%, transparent 0),
          radial-gradient(@dotColor 30%, transparent 0);
      background-size    : 30px 30px;
      background-position: 0 0, 15px 15px;
  }
  
  /* 绘制一个棋盘的图案，先将棋盘图案分成两个正方形阵列，然后每个阵列正方形通过两个直角三角形组合起来 */
  .cube4 {
      background-color: #eee;
      @blockColor     : #bbb;
      background-image: linear-gradient(45deg, @blockColor 25%, transparent 0),
          linear-gradient(45deg, transparent 75%, @blockColor 0),
          linear-gradient(45deg, @blockColor 25%, transparent 0),
          linear-gradient(45deg, transparent 75%, @blockColor 0);
      background-size    : 30px 30px;
      background-position: 0 0, 15px 15px, 15px 15px, 0 30px;
  }
  
  /* 
  CSS4中定义了新的角向渐变：所有的色标颜色变化是由一条射线绕着端点旋转来推进的。比如说下面这个色轮。
  属性的浏览器兼容情况：https://caniuse.com/#search=conic-gradient
   */
  .cube5 {
      width        : 135px;
      border-radius: 100%;
      background   : conic-gradient(red, yellow, lime, aqua, blue, fuchsia, red);
  }
  
  /* 同样可以用这个属性来创建一个棋盘 */
  .cube6 {
      @dark           : #bbb;
      @light          : #eee;
      background-image: conic-gradient(@dark 0, @dark 25%, @light 0, @light 50%, @dark 0, @dark 75%, @light 0);
      // 或者用repeating-conic-gradient可以少些两步
      background-image: repeating-conic-gradient(@dark 0, @dark 25%, @light 0, @light 50%);
      background-size : 30px 30px;
  }
  
  /* 用svg也可以达到同样的效果 (注：将一段CSS代码打断为多行时，用反斜杠转义每行结尾的换行符就好) */
  .cube7 {
      background-color: #eee;
      background-image: url('data:image/svg+xml,\
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity="0.25">\
          <rect x="50" width="50" height="50"/>\
          <rect y="50" width="50" height="50"/>\
      </svg>');
      background-size: 30px 30px;
  }`
}
