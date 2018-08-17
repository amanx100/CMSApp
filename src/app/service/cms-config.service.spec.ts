import { TestBed, inject } from '@angular/core/testing';

import { CmsConfigService } from './cms-config.service';

describe('CmsConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CmsConfigService]
    });
  });

  it('should be created', inject([CmsConfigService], (service: CmsConfigService) => {
    expect(service).toBeTruthy();
  }));
});
