import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutoutCornersComponent } from './cutout-corners.component';

describe('CutoutCornersComponent', () => {
  let component: CutoutCornersComponent;
  let fixture: ComponentFixture<CutoutCornersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutoutCornersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutoutCornersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
