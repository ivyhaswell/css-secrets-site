import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyphenationComponent } from './hyphenation.component';

describe('HyphenationComponent', () => {
  let component: HyphenationComponent;
  let fixture: ComponentFixture<HyphenationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyphenationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyphenationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
