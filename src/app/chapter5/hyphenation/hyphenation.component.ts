import { Component, OnInit } from '@angular/core';
import style from './hyphenation.component.less'

@Component({
  selector: 'app-hyphenation',
  template: `
    <div class="container">
      <div [class]="'cube cube' + (i + 1)" *ngFor="let item of loops;let i = index">
        <p lang="en">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatibus provident tenetur doloremque cupiditate excepturi voluptas fugiat delectus ratione minima?</p>
      </div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./hyphenation.component.less']
})
export class HyphenationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loops = Array(2).fill(0)

  code = style

}
