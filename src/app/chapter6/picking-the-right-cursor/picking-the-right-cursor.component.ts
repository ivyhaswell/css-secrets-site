import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picking-the-right-cursor',
  templateUrl: './picking-the-right-cursor.component.html',
  styleUrls: ['./picking-the-right-cursor.component.less']
})
export class PickingTheRightCursorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cursors = [
    "default", "none", "help", "pointer", "progress", "wait", "crosshair",
    "text", "vertical-text", "copy", "move", "no-drop", "not-allowed", "grab",
    "grabbing", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize",
    "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize",
    "ns-resize", "nesw-resize", "nwse-resize", "zoom-out",
  ]
}

