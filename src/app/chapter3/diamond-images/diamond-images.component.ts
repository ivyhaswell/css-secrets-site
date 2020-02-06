import { Component, OnInit } from '@angular/core';
import style from './diamond-images.component.less'

const imgSrc = 'https://cdn.img.wenhairu.com/images/2020/02/04/Av4Xq.jpg'

@Component({
  selector: 'app-diamond-images',
  template: `
    <div class="container">
      <div class="cube cube1">
        <img src="${imgSrc}" alt="">
      </div>
      <div class="cube cube2">
        <img src="${imgSrc}" alt="">
      </div>
      <img class="cube3" src="${imgSrc}" alt="">
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./diamond-images.component.less'],
})
export class DiamondImagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
