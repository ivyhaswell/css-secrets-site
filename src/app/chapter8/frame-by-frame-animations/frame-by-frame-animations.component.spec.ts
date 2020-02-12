import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameByFrameAnimationsComponent } from './frame-by-frame-animations.component';

describe('FrameByFrameAnimationsComponent', () => {
  let component: FrameByFrameAnimationsComponent;
  let fixture: ComponentFixture<FrameByFrameAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameByFrameAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameByFrameAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
