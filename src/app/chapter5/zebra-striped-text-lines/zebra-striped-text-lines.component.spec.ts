import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZebraStripedTextLinesComponent } from './zebra-striped-text-lines.component';

describe('ZebraStripedTextLinesComponent', () => {
  let component: ZebraStripedTextLinesComponent;
  let fixture: ComponentFixture<ZebraStripedTextLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZebraStripedTextLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZebraStripedTextLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
