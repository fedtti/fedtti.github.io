import { TestBed } from '@angular/core/testing';

import { Gravatar } from './gravatar';

describe('Gravatar', () => {
  let service: Gravatar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gravatar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
