import { TestBed } from '@angular/core/testing';

import { AllumettesProviderService } from './allumettes-provider.service';

describe('AllumettesProviderService', () => {
  let service: AllumettesProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllumettesProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
