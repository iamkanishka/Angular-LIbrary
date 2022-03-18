import { TestBed } from '@angular/core/testing';

import { StaffemployeeService } from './staffemployee.service';

describe('StaffemployeeService', () => {
  let service: StaffemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
