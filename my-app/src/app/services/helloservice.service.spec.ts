import { TestBed } from '@angular/core/testing';

import { HelloserviceService } from './helloservice.service';

describe('HelloserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloserviceService = TestBed.get(HelloserviceService);
    expect(service).toBeTruthy();
  });
});
