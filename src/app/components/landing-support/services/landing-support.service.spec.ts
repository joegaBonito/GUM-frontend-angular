import { TestBed, inject } from '@angular/core/testing';

import { LandingSupportService } from './landing-support.service';

describe('LandingSupportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LandingSupportService]
    });
  });

  it('should be created', inject([LandingSupportService], (service: LandingSupportService) => {
    expect(service).toBeTruthy();
  }));
});
