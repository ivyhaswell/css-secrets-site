import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCubeContainer]'
})
export class CubeContainerDirective {

  constructor(el: ElementRef) {
    let style: Partial<CSSStyleDeclaration> = {
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
    for (const key in style) {
      if (style.hasOwnProperty(key)) {
        const element = style[key];
        el.nativeElement.style[key] = element
      }
    }
  }

}
