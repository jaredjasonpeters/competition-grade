import { TestBed } from '@angular/core/testing';

import { SeriesFormulationService } from './series-formulation.service';

describe('SeriesFormulationService', () => {
  let service: SeriesFormulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesFormulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
