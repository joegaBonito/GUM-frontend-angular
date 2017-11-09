import { TestBed, inject } from '@angular/core/testing';

import { LandingRequestService } from './landing-request.service';

describe('LandingRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LandingRequestService]
    });
  });

  it('should be created', inject([LandingRequestService], (service: LandingRequestService) => {
    expect(service).toBeTruthy();
  }));
});
