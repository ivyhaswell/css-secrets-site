import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeEmphasizeByDimmingComponent } from './de-emphasize-by-dimming.component';

describe('DeEmphasizeByDimmingComponent', () => {
  let component: DeEmphasizeByDimmingComponent;
  let fixture: ComponentFixture<DeEmphasizeByDimmingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeEmphasizeByDimmingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeEmphasizeByDimmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
