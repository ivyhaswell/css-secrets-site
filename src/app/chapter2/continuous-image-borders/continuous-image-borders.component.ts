import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continuous-image-borders',
  templateUrl: './continuous-image-borders.component.html',
  styleUrls: ['./continuous-image-borders.component.less']
})
export class ContinuousImageBordersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = `
/* 要把一个图片应用为边框，并且希望在这个元素的尺寸扩大或者缩小的时候，这副图片都能够自动延伸并覆盖完整的边框区域 */

/* 第一个想到的估计就是border-image */
.cube1 {
    border-width: 10px;
    border-style: solid;
    border-image: url(src/assets/border-image.jpg) 10 10 round;
}

/* 但是border-image的工作原理其实是九宫格伸缩法。在元素尺寸不同的情况下，要么会四个角显示成图片四个角边框拉伸，要么就是整个图片拉伸。 */
/* 如果想要拐角处的图片区域是随内容宽高和边框厚度变化的 */
/* 第一种解决方法，用两个元素 */

.cube2 {
    background-image: url(src/assets/border-image.jpg);
    background-size : cover;

    >div {
        padding         : 10px;
        background-color: white;
    }
}

/* 只用一个元素，也可以达到这个效果，主要思路就是： */
/* 
在背景图片上面叠加一层纯白的是实色背景，为了让下方的背景图片显示出来，给两层背景使用不同的background-clip值。
注意background-origin默认值为padding-box，要将其设置为border-box。
*/
.cube3 {
    border           : 10px solid transparent;
    padding          : 10px;
    background-image : linear-gradient(white, white), url(src/assets/border-image.jpg);
    background-size  : cover;
    background-clip  : padding-box, border-box;
    background-repeat: no-repeat;
    background-origin: border-box;
}

/* 还能做信封边框 */
.cube4 {
    padding          : 10px;
    border           : 10px solid transparent;
    background-origin: border-box;
    background       : linear-gradient(white, white),
        repeating-linear-gradient(-45deg,
            red 0, red 12.5%,
            transparent 0, transparent 25%,
            #58a 0, #58a 37.5%,
            transparent 0, transparent 50%);
    background-clip: padding-box, border-box;
    background-size: 40px 40px;
    animation      : ants 4s linear infinite;
}

@keyframes ants {
    to {
        background-position: 100%;
    }
}`
}
