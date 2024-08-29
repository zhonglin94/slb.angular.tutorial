import { TestBed } from '@angular/core/testing';

import { AbstractToastService } from './abstract-toast.service';

describe('AbstractToastService', () => {
  let service: AbstractToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
