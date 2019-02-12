import { TestBed } from '@angular/core/testing';

import { ApodApiService } from './apod-api.service';

describe('ApodApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApodApiService = TestBed.get(ApodApiService);
    expect(service).toBeTruthy();
  });
});
