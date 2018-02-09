import { TestBed, inject } from '@angular/core/testing';

import { GistService } from './gist.service';

describe('GistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GistService]
    });
  });

  it('should be created', inject([GistService], (service: GistService) => {
    expect(service).toBeTruthy();
  }));
});
