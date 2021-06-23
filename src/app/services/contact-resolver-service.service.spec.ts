import { TestBed } from '@angular/core/testing';

import { ContactResolverServiceService } from './contact-resolver-service.service';

describe('ContactResolverServiceService', () => {
  let service: ContactResolverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactResolverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
