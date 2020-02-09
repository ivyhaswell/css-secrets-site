import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import style from './de-emphasize-by-blurring.component.less'
import { MainContentService } from 'service/main-content.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-de-emphasize-by-blurring',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './de-emphasize-by-blurring.component.html',
  styleUrls: ['./de-emphasize-by-blurring.component.less']
})
export class DeEmphasizeByBlurringComponent implements OnInit {

  @ViewChild('dialog', { static: true }) dialog: ElementRef

  constructor(private mainContentService: MainContentService) { }

  ngOnInit() {
  }

  showDialog(show: boolean) {
    const deEmphasizeClassName = 'de-emphasized'

    let dialog = this.dialog.nativeElement as HTMLDialogElement
    if (show) {
      dialog.showModal()
      this.mainContentService.addClassName(deEmphasizeClassName)
    } else {
      dialog.close()
      this.mainContentService.removeClassName(deEmphasizeClassName)
    }
  }

  code = style
}
