import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelogramsComponent } from './parallelograms.component';

describe('ParallelogramsComponent', () => {
  let component: ParallelogramsComponent;
  let fixture: ComponentFixture<ParallelogramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallelogramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
