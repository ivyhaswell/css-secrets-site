import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertingLineBreaksComponent } from './inserting-line-breaks.component';

describe('InsertingLineBreaksComponent', () => {
  let component: InsertingLineBreaksComponent;
  let fixture: ComponentFixture<InsertingLineBreaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertingLineBreaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertingLineBreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
