import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkingComponent } from './blinking.component';

describe('BlinkingComponent', () => {
  let component: BlinkingComponent;
  let fixture: ComponentFixture<BlinkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlinkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
