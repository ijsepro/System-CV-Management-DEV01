import { TestBed, inject } from '@angular/core/testing';

import { SignService } from './sign.services';

describe('SignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignService]
    });
  });

  it('should be created', inject([SignService], (service: SignService) => {
    expect(service).toBeTruthy();
  }));
});
