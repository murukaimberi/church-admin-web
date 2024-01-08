import { ResolveFn } from '@angular/router';

export const dependantResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
