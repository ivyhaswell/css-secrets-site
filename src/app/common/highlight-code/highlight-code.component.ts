import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-code',
  templateUrl: './highlight-code.component.html',
  styleUrls: ['./highlight-code.component.less']
})
export class HighlightCodeComponent implements OnInit {

  @Input() code: string = ''
  @Input() languages: string[] = ['less']

  constructor() { }

  ngOnInit() {
  }

}
