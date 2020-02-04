import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiBordersComponent } from './multi-borders.component';

describe('MultiBordersComponent', () => {
  let component: MultiBordersComponent;
  let fixture: ComponentFixture<MultiBordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiBordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiBordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
