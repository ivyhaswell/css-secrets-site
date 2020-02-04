import { Component, OnInit } from '@angular/core';

let style = ''

@Component({
  selector: 'app-cutout-corners',
  template: `
    <div class="container">
      <div class="cube cube1"></div>
      <div class="cube cube2"></div>
      <div class="cube cube3"></div>
      <div class="cube cube4"></div>
      <div class="cube cube5"></div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styles: [(style = `
  /* 用万能的渐变 */
  .cube1 {
    background-image: linear-gradient(135deg, transparent 14px, #58a 0),
                      linear-gradient(45deg, transparent 14px, #58a 0),
                      linear-gradient(-45deg, transparent 14px, #58a 0),
                      linear-gradient(-135deg, transparent 14px, #58a 0);
    background-size: 50% 50%;
    background-repeat: no-repeat;
    background-position: top left, bottom left, bottom right, top right;
  }

  /* 还可以用radial-gradient做弧形切角 */
  .cube2 {
    background-image: radial-gradient(circle at top left, transparent 20px, #58a 0),
                      radial-gradient(circle at bottom left, transparent 20px, #58a 0),
                      radial-gradient(circle at top right, transparent 20px, #58a 0),
                      radial-gradient(circle at bottom right, transparent 20px, #58a 0);
    background-size: 50% 50%;
    background-position: top left, bottom left, top right, bottom right;
    background-repeat: no-repeat;
  }

  /* 用svg + border-image做切角 */
  .cube3 {
    border: 20px solid transparent;
    border-image: 10 url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="%2358a"><polygon points="0,10 10,0 20,0 30,10 30,20 20,30 10,30 0,20" /></svg>');
    background-color: #58a;
    background-clip: padding-box;
  }

  /* 用clip-path */
  .cube4 {
    background-color: #58a;
    clip-path: polygon(20px 0,calc(100% - 20px) 0,100% 20px,100% calc(100% - 20px),calc(100% - 20px) 100%,20px 100%,0 calc(100% - 20px),0 20px)
  }
  `)]
})
export class CutoutCornersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style
}
