import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisticTextEffectsComponent } from './realistic-text-effects.component';

describe('RealisticTextEffectsComponent', () => {
  let component: RealisticTextEffectsComponent;
  let fixture: ComponentFixture<RealisticTextEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealisticTextEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealisticTextEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
