import { Component, ViewEncapsulation } from '@angular/core';
import { MainContentService } from 'service/main-content.service';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.less'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'css-secrets-test-site';
  classNames = []

  constructor(private mainContentService: MainContentService) {
    this.mainContentService.classNamesSubject.subscribe(cs => this.classNames = cs)
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : ''
  }

}

