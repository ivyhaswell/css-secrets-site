import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuousImageBordersComponent } from './continuous-image-borders.component';

describe('ContinuousImageBordersComponent', () => {
  let component: ContinuousImageBordersComponent;
  let fixture: ComponentFixture<ContinuousImageBordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinuousImageBordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuousImageBordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
