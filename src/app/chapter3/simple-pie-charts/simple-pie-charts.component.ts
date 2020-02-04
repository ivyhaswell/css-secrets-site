import { Component, OnInit } from '@angular/core';

let style = ''

@Component({
  selector: 'app-simple-pie-charts',
  template: `
    <div class="container">
      <div class="pie pie1"></div>
      <div class="pie pie2"></div>
      <div class="pie pie3"></div>
      <div class="pie pie4" style="animation-delay: -20s"></div>
      <div class="pie pie4" style="animation-delay: -60s"></div>
      <svg width="100" height="100" class="pie5">
        <circle r="25" cx="50" cy="50" />
      </svg>
      <svg width="100" height="100" class="pie6">
        <circle r="25" cx="50" cy="50" />
      </svg>
      <div class="pie pie7"></div>
      <div class="pie pie8"></div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styles: [(style = `
  .pie{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 20px;
  }
  svg{
    margin: 0 20px;
  }

  /* 第一种方案，老套路，通过画半圆，旋转重叠等来做 */
  .pie1{
    background-image: linear-gradient(to right, yellowgreen 50%, #655 0) ;
  }
  .pie1::before{
    content: '';
    width: 50%;
    height: 100%;
    border-radius:100% 0 0 100% / 50% ;
    background-color: yellowgreen;
    display: block;
    transform-origin: center right;
    transform: rotate(-45deg);
  }

  /* 这个方案在比率大于50%的时候就需要变化一下 */
  .pie2{
    background-image: linear-gradient(to right, yellowgreen 50%, #655 0) ;
  }
  .pie2::before{
    content: '';
    width: 50%;
    height: 100%;
    margin-left: 50%;
    border-radius: 0 100% 100% 0 / 50% ;
    background-color: #655;
    display: block;
    transform-origin: center left;
    transform: rotate(45deg);
  }

  /* 顺便可以来个从0到100的动画，主要思路是伪元素变色，每半圈变一次。注意动画函数用step-end，否则背景颜色会是渐变过去的效果 */
  .pie3{
	  background: yellowgreen;
	  background-image: linear-gradient(to right, transparent 50%, currentColor 0);
	  color: #655;
  }
  .pie3::before{
    content: '';
    width: 50%;
    height: 100%;
    margin-left: 50%;
    border-radius: 0 100% 100% 0 / 50% ;
    background-color: inherit;
    display: block;
    transform-origin: center left;
	  animation: spin 3s linear infinite, bg 6s step-end infinite;
  }
  @keyframes spin {
	  to { transform: rotate(.5turn); }
  }
  @keyframes bg {
	  50% { background: currentColor; }
  }
  /* 
  那么，如何制作出多个不同比率的静态饼图呢？动态的改伪元素的样式是件麻烦事儿。
  解决方法来自上面那个动画，只需要把这个动画暂停到需要的位置就可以了，那么那么那么，怎么暂停动画到指定位置呢？
  答案就是animation-delay，根据W3C的规范(http://w3.org/TR/css-animations/#animation-delay)：
    “一个负的延时值是合法的。与0s的延时类似，它意味着动画会立即开始播放，但会自动前进到延时值的绝对值处，
    就好像动画已经播放了指定的时间一样。因此实际效果就是动画跳过指定时间而从中间开始播放。”
  然后再设置animation-play-state为paused，成功解决。
  */
 .pie4{
	  background: yellowgreen;
	  background-image: linear-gradient(to right, transparent 50%, currentColor 0);
	  color: #655;
  }
  .pie4::before{
    content: '';
    width: 50%;
    height: 100%;
    margin-left: 50%;
    border-radius: 0 100% 100% 0 / 50% ;
    background-color: inherit;
    display: block;
    transform-origin: center left;
    animation: spin 50s linear infinite, bg 100s step-end infinite;
    animation-delay: inherit;
    animation-play-state: paused;
  }
  /* 
    通过svg也可以实现，核心是stroke-dasharray这个属性（https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray）。
      “stroke-dasharray本来是为虚线描边准备的，它接受多个数值，数与数之间用逗号或者空白隔开，指定短划线和缺口的长度。
      如果提供了奇数个值，则这个值的数列重复一次，从而变成偶数个值。因此，5,3,2等同于5,3,2,5,3,2。”
    这个数值在圆形上以2πr为准，因此只要将划线长度设置好，间隙的数值设置大于2πr，就可以画出扇形
  */
  .pie5 {
    fill: yellowgreen;
    stroke: #655;
    stroke-width: 50;
    stroke-dasharray: 60 158;
    background-color: yellowgreen;
    border-radius: 50%;
    transform: rotate(-90deg);
  }
  /* 同样简单的加个动画 */
  @keyframes fillup{
    to {
      stroke-dasharray: 158 158;
    }
  }
  .pie6 {
    fill: yellowgreen;
    stroke: #655;
    stroke-width: 50;
    stroke-dasharray: 0 158;
    background-color: yellowgreen;
    border-radius: 50%;
    transform: rotate(-90deg);
    animation: fillup 6s linear infinite;
  }
  /* 还有一个特别简单的画饼方式，就是前面有提到过的conic-gradient（目前浏览器支持度还不高） */
  .pie7{
    background: conic-gradient(#655 40%, yellowgreen 0);
  }
  /* 用这个属性画多色饼图也是轻而易举 */
  .pie8{
    background: conic-gradient(deeppink 20%,#fb3 20%, #fb3 30%, yellowgreen 0);
  }
  `)]
})
export class SimplePieChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
