import { Component, OnInit } from '@angular/core';
import style from './pseudo-random-backgrounds.component.less'

@Component({
    selector: 'app-pseudo-random-backgrounds',
    templateUrl: './pseudo-random-backgrounds.component.html',
    styleUrls: ['./pseudo-random-backgrounds.component.less']
})
export class PseudoRandomBackgroundsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    code = style
}
