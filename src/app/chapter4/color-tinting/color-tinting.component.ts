import { Component, OnInit } from '@angular/core';
import style from './color-tinting.component.less'

const imgSrc = 'https://cdn.img.wenhairu.com/images/2020/02/04/Av4Xq.jpg'

@Component({
  selector: 'app-color-tinting',
  template: `
  <div class="container">
    <div class="cube cube1">
      <div class="img-wrap">
        <img src="${imgSrc}" alt="">
      </div>
      <p>蒙一层纯色半透明背景</p>
    </div>
    <div class="cube blur">
      <img src="${imgSrc}" alt="">
      <p>blur - 高斯模糊</p>
    </div>
    <div class="cube brightness">
      <img src="${imgSrc}" alt="">
      <p>brightness - 亮度</p>
    </div>
    <div class="cube contrast">
      <img src="${imgSrc}" alt="">
      <p>contrast - 对比度</p>
    </div>
    <div class="cube drop-shadow">
      <img src="${imgSrc}" alt="">
      <p>drop-shadow - 阴影</p>
    </div>
    <div class="cube grayscale">
      <img src="${imgSrc}" alt="">
      <p>grayscale - 灰阶</p>
    </div>
    <div class="cube hue-rotate">
      <img src="${imgSrc}" alt="">
      <p>hue-rotate - 色调</p>
    </div>
    <div class="cube invert">
      <img src="${imgSrc}" alt="">
      <p>invert - 反色</p>
    </div>
    <div class="cube opacity">
      <img src="${imgSrc}" alt="">
      <p>opacity - 透明度</p>
    </div>
    <div class="cube saturate">
      <img src="${imgSrc}" alt="">
      <p>saturate - 饱和度</p>
    </div>
    <div class="cube sepia">
      <img src="${imgSrc}" alt="">
      <p>sepia - 调整棕色</p>
    </div>
    <div class="cube mix-blend-mode">
      <a href="#nothing"><img src="${imgSrc}" alt=""></a> 
      <p>混合模式 - mix-blend-mode</p>
    </div>
    <div class="cube background-blend-mode">
      <div class="img-container" style="background-image:url(${imgSrc});"></div>
      <p>混合模式 - background-blend-mode</p>
    </div>
  </div>
  <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./color-tinting.component.less']
})
export class ColorTintingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
