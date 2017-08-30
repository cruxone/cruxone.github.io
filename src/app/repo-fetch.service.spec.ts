import { TestBed, inject } from '@angular/core/testing';

import { RepoFetchService } from './repo-fetch.service';

describe('RepoFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoFetchService]
    });
  });

  it('should be created', inject([RepoFetchService], (service: RepoFetchService) => {
    expect(service).toBeTruthy();
  }));
});
