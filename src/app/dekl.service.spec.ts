import { TestBed } from '@angular/core/testing';

import { DeklService } from './dekl.service';

describe('DeklService', () => {
  let service: DeklService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeklService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
