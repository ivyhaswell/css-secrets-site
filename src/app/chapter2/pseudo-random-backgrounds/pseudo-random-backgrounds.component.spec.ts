import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoRandomBackgroundsComponent } from './pseudo-random-backgrounds.component';

describe('PseudoRandomBackgroundsComponent', () => {
  let component: PseudoRandomBackgroundsComponent;
  let fixture: ComponentFixture<PseudoRandomBackgroundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PseudoRandomBackgroundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseudoRandomBackgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
