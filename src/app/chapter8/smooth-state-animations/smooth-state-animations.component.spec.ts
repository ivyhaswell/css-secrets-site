import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothStateAnimationsComponent } from './smooth-state-animations.component';

describe('SmoothStateAnimationsComponent', () => {
  let component: SmoothStateAnimationsComponent;
  let fixture: ComponentFixture<SmoothStateAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothStateAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothStateAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
