import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustingTabWidthComponent } from './adjusting-tab-width.component';

describe('AdjustingTabWidthComponent', () => {
  let component: AdjustingTabWidthComponent;
  let fixture: ComponentFixture<AdjustingTabWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustingTabWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustingTabWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
