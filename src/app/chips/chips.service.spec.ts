import { TestBed } from '@angular/core/testing';

import { ChipsService } from './chips.service';

describe('ChipsService', () => {
  let service: ChipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChipsService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
