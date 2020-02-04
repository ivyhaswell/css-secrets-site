import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedBgPositionComponent } from './extended-bg-position.component';

describe('ExtendedBgPositionComponent', () => {
  let component: ExtendedBgPositionComponent;
  let fixture: ComponentFixture<ExtendedBgPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedBgPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedBgPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
