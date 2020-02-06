import { TestBed } from '@angular/core/testing';

import { StyleHelperService } from './style-helper.service';

describe('StyleHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StyleHelperService = TestBed.get(StyleHelperService);
    expect(service).toBeTruthy();
  });
});
