import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrinsicSizingComponent } from './intrinsic-sizing.component';

describe('IntrinsicSizingComponent', () => {
  let component: IntrinsicSizingComponent;
  let fixture: ComponentFixture<IntrinsicSizingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrinsicSizingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrinsicSizingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
