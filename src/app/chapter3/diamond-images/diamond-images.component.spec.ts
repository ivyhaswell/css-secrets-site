import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondImagesComponent } from './diamond-images.component';

describe('DiamondImagesComponent', () => {
  let component: DiamondImagesComponent;
  let fixture: ComponentFixture<DiamondImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiamondImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiamondImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
