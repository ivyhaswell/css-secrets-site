import { Component, OnInit } from '@angular/core';
import style from './frosted-glass-effect.component.less'

@Component({
  selector: 'app-frosted-glass-effect',
  template: `
    <div class="container">
      <div [class]="'cube cube'+(i+1)" *ngFor="let item of loop;let i = index">
        <main>
          <blockquote>
            "The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself, with desire for what its monstrous laws have made monstrous and unlawful."
            <footer>—
              <cite>
                Oscar Wilde,
                The Picture of Dorian Gray
              </cite>
            </footer>
          </blockquote>
        </main>
      </div>
    </div>
    <app-highlight-code [code]="code"></app-highlight-code>
  `,
  styleUrls: ['./frosted-glass-effect.component.less']
})
export class FrostedGlassEffectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loop = Array(3).fill(0)

  code = style
}
