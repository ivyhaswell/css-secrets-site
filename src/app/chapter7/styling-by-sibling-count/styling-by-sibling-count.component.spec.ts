import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingBySiblingCountComponent } from './styling-by-sibling-count.component';

describe('StylingBySiblingCountComponent', () => {
  let component: StylingBySiblingCountComponent;
  let fixture: ComponentFixture<StylingBySiblingCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylingBySiblingCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylingBySiblingCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
