import { TestBed } from '@angular/core/testing';

import { BaptsimService } from './baptsim.service';

describe('BaptsimService', () => {
  let service: BaptsimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaptsimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
