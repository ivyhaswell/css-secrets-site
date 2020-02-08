import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyAmpersandsComponent } from './fancy-ampersands.component';

describe('FancyAmpersandsComponent', () => {
  let component: FancyAmpersandsComponent;
  let fixture: ComponentFixture<FancyAmpersandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyAmpersandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyAmpersandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
