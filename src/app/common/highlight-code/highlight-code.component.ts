import { Component, OnInit, Input } from '@angular/core';
import { StyleHelperService } from 'src/style-helper.service';

@Component({
  selector: 'app-highlight-code',
  templateUrl: './highlight-code.component.html',
  styleUrls: ['./highlight-code.component.less']
})
export class HighlightCodeComponent implements OnInit {

  @Input() code: string = ''
  @Input() languages: string[] = ['less']

  constructor(private styleHelper: StyleHelperService) { }

  ngOnInit() {
  }

  get processedCode() {
    return this.styleHelper.replaceSourceMapStatement(this.code)
  }

}
