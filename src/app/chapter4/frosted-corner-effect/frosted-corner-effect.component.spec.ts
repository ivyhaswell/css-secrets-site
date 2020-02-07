import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostedCornerEffectComponent } from './frosted-corner-effect.component';

describe('FrostedCornerEffectComponent', () => {
  let component: FrostedCornerEffectComponent;
  let fixture: ComponentFixture<FrostedCornerEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrostedCornerEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostedCornerEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
