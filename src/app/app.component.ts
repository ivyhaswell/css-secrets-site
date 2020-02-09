import { Component, ViewEncapsulation } from '@angular/core';
import { MainContentService } from 'service/main-content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'css-secrets-test-site';
  classNames = []

  constructor(private mainContentService: MainContentService) {
    this.mainContentService.classNamesSubject.subscribe(cs => this.classNames = cs)
  }

}

