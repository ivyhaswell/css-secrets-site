import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamingTableColumnWidthComponent } from './taming-table-column-width.component';

describe('TamingTableColumnWidthComponent', () => {
  let component: TamingTableColumnWidthComponent;
  let fixture: ComponentFixture<TamingTableColumnWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamingTableColumnWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamingTableColumnWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
