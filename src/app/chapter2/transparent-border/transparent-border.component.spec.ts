import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparentBorderComponent } from './transparent-border.component';

describe('TransparentBorderComponent', () => {
  let component: TransparentBorderComponent;
  let fixture: ComponentFixture<TransparentBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransparentBorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransparentBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
