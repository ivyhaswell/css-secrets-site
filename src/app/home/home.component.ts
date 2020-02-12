import { Component, OnInit, HostBinding } from '@angular/core';
import { animamtions } from './home.component.animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: animamtions,
})
export class HomeComponent implements OnInit {
  @HostBinding('@pageAnimations') animatePage = true

  constructor() { }

  ngOnInit() {
  }

}
