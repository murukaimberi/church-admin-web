import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { baptsimResolver } from './baptsim.resolver';

describe('baptsimResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => baptsimResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
