import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripesBackgroundComponent } from './stripes-background.component';

describe('StripesBackgroundComponent', () => {
  let component: StripesBackgroundComponent;
  let fixture: ComponentFixture<StripesBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripesBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripesBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
