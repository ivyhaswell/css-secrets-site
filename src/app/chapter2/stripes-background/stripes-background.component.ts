import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stripes-background',
  templateUrl: './stripes-background.component.html',
  styleUrls: ['./stripes-background.component.less']
})
export class StripesBackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  code = `
/* 如果多个色标具有相同的位置，它们会产生一个无限小的过渡区域。效果上看就不再是平滑的渐变过程 */
.cube1 {
    background     : linear-gradient(#fb3 50%, #58a 50%);
    background-size: 100% 30px;
}

/* 如果某个色标的位置值比整个列表中在它之前的色标的位置值都要小，则该色标的位置值会被设置为它前面所有色标位置值的最大值 */
.cube2 {
    background     : linear-gradient(#fb3 60%, #58a 0);
    background-size: 100% 30px;
}

/* 三个颜色也是类似的写法 */
.cube3 {
    background     : linear-gradient(#fb3 33.3%, #58a 0, #58a 66.6%, yellowgreen 0);
    background-size: 100% 30px;
}

/* 垂直条纹，加一个方向参数，改一下background-size就好 */
.cube4 {
    background     : linear-gradient(to right, #fb3 50%, #58a 0);
    background-size: 30px 100%;
}

/* 斜向的纹理可以通过创建斜向的条纹拼接，但是在非45°等特殊角度时不易拼接 */
.cube5 {
    background     : linear-gradient(45deg, #fb3 25%, #58a 0, #58a 50%, #fb3 0, #fb3 75%, #58a 0);
    background-size: 42.426406871px 42.426406871px;
}

/* 还有一个repeating-linear-gradient属性，可以创建重复线性渐变 */
.cube6 {
    background: repeating-linear-gradient(45deg,
            #fb3 0, #fb3 25%, #58a 0, #58a 50%);
    background-size: 42.426406871px 42.426406871px;
}`
}
