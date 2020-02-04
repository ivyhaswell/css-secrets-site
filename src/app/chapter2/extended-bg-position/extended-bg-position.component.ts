import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extended-bg-position',
  templateUrl: './extended-bg-position.component.html',
  styleUrls: ['./extended-bg-position.component.less']
})
export class ExtendedBgPositionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = `
/* CSS3已经允许指定背景图片距离任意角的偏移量 */
.cube1{
    background: url(src/assets/treble-clef.png)  no-repeat #58a;
    background-position: right 20px bottom 20px;
}

/* 默认情况下background-position是以padding-box为准的，这样边框才不会遮住背景图片，改成content-box就可以以内容区为基准 */
.cube2{
    background: url(src/assets/treble-clef.png)  no-repeat #58a bottom right;
    background-origin: content-box;
    padding: 20px;
}

/* 也可以通过calc方法计算 */
.cube3{
    background: url(src/assets/treble-clef.png)  no-repeat #58a;
    background-position: calc(100% - 20px) calc(100% - 20px);
}`
}
