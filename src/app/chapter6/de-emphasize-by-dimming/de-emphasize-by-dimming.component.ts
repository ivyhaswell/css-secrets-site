import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import style from './de-emphasize-by-dimming.component.less'

@Component({
  selector: 'app-de-emphasize-by-dimming',
  templateUrl: './de-emphasize-by-dimming.component.html',
  styleUrls: ['./de-emphasize-by-dimming.component.less']
})
export class DeEmphasizeByDimmingComponent implements OnInit {

  @ViewChild('dialog', { static: true }) dialog: ElementRef

  constructor() { }

  ngOnInit() {
  }

  showDialog(show: boolean) {
    let dialog = this.dialog.nativeElement as HTMLDialogElement
    show ? dialog.showModal() : dialog.close()
  }

  code = style
}
