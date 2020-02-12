import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidBackgroundFixedContentComponent } from './fluid-background-fixed-content.component';

describe('FluidBackgroundFixedContentComponent', () => {
  let component: FluidBackgroundFixedContentComponent;
  let fixture: ComponentFixture<FluidBackgroundFixedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluidBackgroundFixedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidBackgroundFixedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
