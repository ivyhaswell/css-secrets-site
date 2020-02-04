import { Component, OnInit } from '@angular/core';

let style = ''

@Component({
  selector: 'app-trapezoid-tabs',
  template: `
    <div class="container">
      <div class="cube cube1">Trapezoid</div>
      <div class="cube cube2">Trapezoid</div>
      <div class="cube cube3">Trapezoid</div>
      <div class="cube cube4">Trapezoid</div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styles: [(style = `
  .cube{
    margin: 20px 40px;
    color:white;
    background-color: #58a;
    width: 120px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  /* 
    CSS3有一个tranform属性perspective，可以形成3D透视的效果。再加上rotate可以实现梯形效果。
    [perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)
   */
  .cube1 {
    transform: perspective(20px) rotateX(5deg);
  }

  /* rotateY */
  .cube2 {
    transform: perspective(20px) rotateY(5deg);
  }

  /* rotateZ */
  .cube3 {
    transform: perspective(20px) rotateZ(5deg);
  }
  
  /* 通过设置transform-origin等其他属性还能得到些其他形状，比如单侧梯形 */
  .cube4 {
    transform: perspective(20px) rotateX(5deg);
    transform-origin: bottom left;
  }
  `)]
})
export class TrapezoidTabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
