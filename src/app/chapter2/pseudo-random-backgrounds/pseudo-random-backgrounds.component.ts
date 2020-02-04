import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pseudo-random-backgrounds',
  templateUrl: './pseudo-random-backgrounds.component.html',
  styleUrls: ['./pseudo-random-backgrounds.component.less']
})
export class PseudoRandomBackgroundsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = `
/* 普通想法就是创建一个多种颜色粗细不均匀的条纹背景，不过还是很容易发现重复规律 */
.cube1 {
    background-image: linear-gradient(90deg, #fb3 15%, #655 0, #655 40%, #ab4 0, #ab4 65%, hsl(20, 40%, 90%) 0);
    background-size : 80px 100%;
}

/* 稍微复杂一点可以将多个渐变图层叠加起来，通过background-size控制条纹的间距，但是仍然能够看出图案每480px(即40、60、80的最小公倍数)重复一次 */
.cube2 {
    background-color: hsl(20, 40%, 90%);
    background-image: linear-gradient(90deg, #fb3 10px, transparent 0),
        linear-gradient(90deg, #ab4 20px, transparent 0),
        linear-gradient(90deg, #655 20px, transparent 0);
    background-size: 80px 100%, 60px 100%, 40px 100%;
}

/* 
为了让随机性更真实，要让这个最小公倍数最大化，因此选择的数字最好是“相对质数”
(注：使用质数是个好思路，但尽管理论上出现重复需要 41*61*83=207583 像素，但视觉效果上其实还是能看出重复的规律，
只是重复的地方每次都会和前面有几个像素的偏差，人眼对这种只是有细小的偏差的重复也是比较敏感的)
*/
.cube3 {
    background-color: hsl(20, 40%, 90%);
    background-image: linear-gradient(90deg, #fb3 11px, transparent 0),
        linear-gradient(90deg, #ab4 23px, transparent 0),
        linear-gradient(90deg, #655 41px, transparent 0);
    background-size: 41px 100%, 61px 100%, 83px 100%;
}`
}
