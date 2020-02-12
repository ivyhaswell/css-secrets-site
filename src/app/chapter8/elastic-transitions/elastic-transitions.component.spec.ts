import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElasticTransitionsComponent } from './elastic-transitions.component';

describe('ElasticTransitionsComponent', () => {
  let component: ElasticTransitionsComponent;
  let fixture: ComponentFixture<ElasticTransitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElasticTransitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElasticTransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
