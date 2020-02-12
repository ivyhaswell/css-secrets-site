import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationAlongACircularPathComponent } from './animation-along-a-circular-path.component';

describe('AnimationAlongACircularPathComponent', () => {
  let component: AnimationAlongACircularPathComponent;
  let fixture: ComponentFixture<AnimationAlongACircularPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationAlongACircularPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationAlongACircularPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
