import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendingTheClickableAreaComponent } from './extending-the-clickable-area.component';

describe('ExtendingTheClickableAreaComponent', () => {
  let component: ExtendingTheClickableAreaComponent;
  let fixture: ComponentFixture<ExtendingTheClickableAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendingTheClickableAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendingTheClickableAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
