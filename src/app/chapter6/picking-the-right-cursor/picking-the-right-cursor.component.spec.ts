import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickingTheRightCursorComponent } from './picking-the-right-cursor.component';

describe('PickingTheRightCursorComponent', () => {
  let component: PickingTheRightCursorComponent;
  let fixture: ComponentFixture<PickingTheRightCursorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickingTheRightCursorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickingTheRightCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
