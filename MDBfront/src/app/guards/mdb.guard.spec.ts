import { TestBed } from '@angular/core/testing';

import { MDBGuard } from './mdb.guard';

describe('MdbGuard', () => {
  let guard: MDBGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MDBGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
