import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSidedShadowsComponent } from './one-sided-shadows.component';

describe('OneSidedShadowsComponent', () => {
  let component: OneSidedShadowsComponent;
  let fixture: ComponentFixture<OneSidedShadowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSidedShadowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSidedShadowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
