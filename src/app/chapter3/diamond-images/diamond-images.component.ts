import { Component, OnInit } from '@angular/core';

const imgSrc = 'https://cdn.img.wenhairu.com/images/2020/02/04/Av4Xq.jpg'
let style = ''

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
  styles: [(style = `
.cube{
  height: auto;
  overflow: hidden;
  margin: 30px 40px;
}
img{
  max-width: 100%;
}

/* 简单的想法，首先旋转图片容器45度，然后将图片网回旋转45度 */
.cube1{
  transform: rotate(45deg);
}
.cube1 img{
  transform: rotate(-45deg);
}
/* 然而图片编程了八边形，因为容器旋转了45度，图片没有填满容器，这种情况下计算一下比值，将图片放大根号2倍ok */
.cube2{
  transform: rotate(45deg);
}
.cube2 img{
  transform: rotate(-45deg) scale(1.414); 
}
/* 上面的方法一者需要多一层元素，二者遇到非正方形的图片不太适用。更简单且适用的方法来了: clip-path */
.cube3 {
  margin-left: 40px;
  width: 200px;
  clip-path: polygon(0 50%, 50% 100%,100% 50%,50% 0);
  transition: 1s clip-path;
}
/* 还能加一个鼠标悬浮的变化效果 */
.cube3:hover{
  clip-path: polygon(0 0, 0 100%,100% 100%,100% 0);
}
  `)]
})
export class DiamondImagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
