import { TestBed, inject } from '@angular/core/testing';

import { AuthguardGuardService } from './authguard-guard.service';

describe('AuthguardGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthguardGuardService]
    });
  });

  it('should be created', inject([AuthguardGuardService], (service: AuthguardGuardService) => {
    expect(service).toBeTruthy();
  }));
});
