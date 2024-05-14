import { TestBed } from '@angular/core/testing';

import { AsmxService } from './asmx.service';

describe('AsmxService', () => {
  let service: AsmxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsmxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
