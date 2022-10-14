import { TestBed } from '@angular/core/testing';

import { RickMortyService } from './rick-morty.service';

describe('RickMortyService', () => {
  let service: RickMortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickMortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
