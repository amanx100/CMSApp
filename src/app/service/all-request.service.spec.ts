import { TestBed, inject } from '@angular/core/testing';

import { AllRequestService } from './all-request.service';

describe('AllRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllRequestService]
    });
  });

  it('should be created', inject([AllRequestService], (service: AllRequestService) => {
    expect(service).toBeTruthy();
  }));
});
