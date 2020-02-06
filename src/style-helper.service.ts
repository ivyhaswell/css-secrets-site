import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleHelperService {

  constructor() { }

  replaceSourceMapStatement(s: string = ''): string {
    return s.replace(/.*sourceMappingURL.*/, '')
  }
}
