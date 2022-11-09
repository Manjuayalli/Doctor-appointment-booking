import { TestBed } from '@angular/core/testing';

import { PaticentService } from './paticent.service';

describe('PaticentService', () => {
  let service: PaticentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaticentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
