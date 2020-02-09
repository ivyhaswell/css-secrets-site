import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainContentService {

  classNamesSubject: Subject<string[]> = new Subject<string[]>()
  classNames: string[] = []

  addClassName(className: string) {
    if (!this.classNames.includes(className)) {
      this.classNames.push(className)
      this.nextClassName()
    }
  }

  removeClassName(className: string) {
    let index = this.classNames.indexOf(className)
    if (index !== -1) {
      this.classNames.splice(index, 1)
      this.nextClassName()
    }
  }

  nextClassName() {
    this.classNamesSubject.next(this.classNames)
  }

  constructor() { }
}
