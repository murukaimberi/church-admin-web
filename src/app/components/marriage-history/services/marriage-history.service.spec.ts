import { TestBed } from '@angular/core/testing';

import { MarriageHistoryService } from './marriage-history.service';

describe('MarriageHistoryService', () => {
  let service: MarriageHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarriageHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
