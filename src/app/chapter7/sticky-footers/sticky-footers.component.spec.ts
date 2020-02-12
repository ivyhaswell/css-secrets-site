import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyFootersComponent } from './sticky-footers.component';

describe('StickyFootersComponent', () => {
  let component: StickyFootersComponent;
  let fixture: ComponentFixture<StickyFootersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyFootersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyFootersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
