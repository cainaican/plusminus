import { TestBed } from '@angular/core/testing';

import { MinusService } from './minus.service';

describe('MinusService', () => {
  let service: MinusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
