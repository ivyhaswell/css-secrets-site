import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTintingComponent } from './color-tinting.component';

describe('ColorTintingComponent', () => {
  let component: ColorTintingComponent;
  let fixture: ComponentFixture<ColorTintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorTintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorTintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
