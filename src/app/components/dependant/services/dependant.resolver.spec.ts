import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { dependantResolver } from './dependant.resolver';

describe('dependantResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => dependantResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
