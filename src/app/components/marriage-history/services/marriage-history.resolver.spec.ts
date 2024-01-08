import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { marriageHistoryResolver } from './marriage-history.resolver';

describe('marriageHistoryResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => marriageHistoryResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
