import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCenteringComponent } from './vertical-centering.component';

describe('VerticalCenteringComponent', () => {
  let component: VerticalCenteringComponent;
  let fixture: ComponentFixture<VerticalCenteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalCenteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalCenteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
