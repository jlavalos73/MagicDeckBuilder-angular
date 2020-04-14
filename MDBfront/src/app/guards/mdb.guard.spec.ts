import { TestBed } from '@angular/core/testing';

import { MdbGuard } from './mdb.guard';

describe('MdbGuard', () => {
  let guard: MdbGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MdbGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
