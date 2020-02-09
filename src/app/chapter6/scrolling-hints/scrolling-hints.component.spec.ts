import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingHintsComponent } from './scrolling-hints.component';

describe('ScrollingHintsComponent', () => {
  let component: ScrollingHintsComponent;
  let fixture: ComponentFixture<ScrollingHintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingHintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingHintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
