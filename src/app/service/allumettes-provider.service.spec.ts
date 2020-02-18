import { TestBed, fakeAsync } from '@angular/core/testing';

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

  // On test le service via un fakeAsync 
  // On doit avoir un tableau de taille comprise entre 10 et 15
  it('Doit renvoyer un tableau de taille entre 10 et 15.', fakeAsync(() => {
    let allumettes;
    service.provideAllumettes()
           .subscribe(_allumettes => allumettes = _allumettes);
    expect(allumettes).toBeDefined();
    expect(allumettes.length).toBeGreaterThanOrEqual(10);
    expect(allumettes.length).toBeLessThanOrEqual(15);
  }));
});
