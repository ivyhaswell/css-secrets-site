import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaturesComponent } from './ligatures.component';

describe('LigaturesComponent', () => {
  let component: LigaturesComponent;
  let fixture: ComponentFixture<LigaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
