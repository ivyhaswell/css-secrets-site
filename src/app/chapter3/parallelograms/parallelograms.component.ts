import { Component, OnInit } from '@angular/core';

let style = ''

@Component({
  selector: 'app-parallelograms',
  template: `
  <div class="container">
    <div class="cube cube1"></div>
    <div class="cube cube2">
      <div class="text">Alchemy</div>
    </div>
    <div class="cube cube3"></div>
  </div>
  <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styles: [(style = `
  /* 可以简单的用transfrm:skew()对矩形做一个变形得到平行四边形 */
  .cube1{
    background-color: #fb3;
    transform: skew(-45deg);
  }
  /* 当内部有内容时，为了让内容不会一起变形，可以对内容元素做一个相反的变形 */
  .cube2{
    background-color: #58a;
    transform: skew(-45deg);
    text-align:center;    
    line-height:120px;
  }
  .cube2 .text{
    color: white;
    font-size: 24px;
    transform: skew(45deg);
  }
  /* 也可以通过应用变形到伪元素上避免影响主体样式 */
  .cube3 {
    position: relative;
    background-color: transparent;
  }
  .cube3::before{
    content: '';
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* 设置z-index为-1使其堆叠层次在宿主元素之后，但是这个方法对所有的父级元素都要求背景透明，其实在大部分场景下是不适用的 */
    /* z-index: -1; */
    background-color: #58a;
    transform: skew(-45deg);
  }
  `)]
})
export class ParallelogramsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
