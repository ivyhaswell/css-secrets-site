import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrregularDropShadowsComponent } from './irregular-drop-shadows.component';

describe('IrregularDropShadowsComponent', () => {
  let component: IrregularDropShadowsComponent;
  let fixture: ComponentFixture<IrregularDropShadowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrregularDropShadowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrregularDropShadowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
