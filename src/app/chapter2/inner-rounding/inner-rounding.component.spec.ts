import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerRoundingComponent } from './inner-rounding.component';

describe('InnerRoundingComponent', () => {
  let component: InnerRoundingComponent;
  let fixture: ComponentFixture<InnerRoundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerRoundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerRoundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
