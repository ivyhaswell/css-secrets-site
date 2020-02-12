import { Component, OnInit } from '@angular/core';
import style from './typing-animation.component.less'

@Component({
  selector: 'app-typing-animation',
  templateUrl: './typing-animation.component.html',
  styleUrls: ['./typing-animation.component.less']
})
export class TypingAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  code = style

}
