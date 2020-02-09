import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeEmphasizeByBlurringComponent } from './de-emphasize-by-blurring.component';

describe('DeEmphasizeByBlurringComponent', () => {
  let component: DeEmphasizeByBlurringComponent;
  let fixture: ComponentFixture<DeEmphasizeByBlurringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeEmphasizeByBlurringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeEmphasizeByBlurringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
