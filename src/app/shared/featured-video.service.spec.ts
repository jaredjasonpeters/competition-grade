import { TestBed } from '@angular/core/testing';

import { FeaturedVideoService } from './featured-video.service';

describe('FeaturedVideoService', () => {
  let service: FeaturedVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
