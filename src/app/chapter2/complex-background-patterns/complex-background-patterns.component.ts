import { Component, OnInit } from '@angular/core';
import style from './complex-background-patterns.component.less'

@Component({
    selector: 'app-complex-background-patterns',
    templateUrl: './complex-background-patterns.component.html',
    styleUrls: ['./complex-background-patterns.component.less']
})
export class ComplexBackgroundPatternsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    code = style
}
