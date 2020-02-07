import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostedGlassEffectComponent } from './frosted-glass-effect.component';

describe('FrostedGlassEffectComponent', () => {
  let component: FrostedGlassEffectComponent;
  let fixture: ComponentFixture<FrostedGlassEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrostedGlassEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostedGlassEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
