import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePieChartsComponent } from './simple-pie-charts.component';

describe('SimplePieChartsComponent', () => {
  let component: SimplePieChartsComponent;
  let fixture: ComponentFixture<SimplePieChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePieChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePieChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
