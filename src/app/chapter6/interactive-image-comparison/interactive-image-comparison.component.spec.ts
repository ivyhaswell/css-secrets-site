import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveImageComparisonComponent } from './interactive-image-comparison.component';

describe('InteractiveImageComparisonComponent', () => {
  let component: InteractiveImageComparisonComponent;
  let fixture: ComponentFixture<InteractiveImageComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveImageComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveImageComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
