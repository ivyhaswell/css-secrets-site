import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibleEllipsesComponent } from './flexible-ellipses.component';

describe('FlexibleEllipsesComponent', () => {
  let component: FlexibleEllipsesComponent;
  let fixture: ComponentFixture<FlexibleEllipsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexibleEllipsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexibleEllipsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
