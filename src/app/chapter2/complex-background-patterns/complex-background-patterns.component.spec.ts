import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexBackgroundPatternsComponent } from './complex-background-patterns.component';

describe('ComplexBackgroundPatternsComponent', () => {
  let component: ComplexBackgroundPatternsComponent;
  let fixture: ComponentFixture<ComplexBackgroundPatternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexBackgroundPatternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexBackgroundPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
