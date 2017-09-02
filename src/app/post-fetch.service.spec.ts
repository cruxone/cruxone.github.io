import { TestBed, inject } from '@angular/core/testing';

import { PostFetchService } from './post-fetch.service';

describe('PostFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostFetchService]
    });
  });

  it('should be created', inject([PostFetchService], (service: PostFetchService) => {
    expect(service).toBeTruthy();
  }));
});
