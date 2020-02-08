import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomUnderlinesComponent } from './custom-underlines.component';

describe('CustomUnderlinesComponent', () => {
  let component: CustomUnderlinesComponent;
  let fixture: ComponentFixture<CustomUnderlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomUnderlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomUnderlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
