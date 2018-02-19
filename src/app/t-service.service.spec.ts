import { TestBed, inject } from '@angular/core/testing';

import { TServiceService } from './t-service.service';

describe('TServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TServiceService]
    });
  });

  it('should be created', inject([TServiceService], (service: TServiceService) => {
    expect(service).toBeTruthy();
  }));
});
