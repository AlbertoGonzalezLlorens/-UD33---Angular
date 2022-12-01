import { TestBed } from '@angular/core/testing';

import { UD33ServiceService } from './ud33-service.service';

describe('UD33ServiceService', () => {
  let service: UD33ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UD33ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
