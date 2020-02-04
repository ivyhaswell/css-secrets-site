import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapezoidTabsComponent } from './trapezoid-tabs.component';

describe('TrapezoidTabsComponent', () => {
  let component: TrapezoidTabsComponent;
  let fixture: ComponentFixture<TrapezoidTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrapezoidTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrapezoidTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
