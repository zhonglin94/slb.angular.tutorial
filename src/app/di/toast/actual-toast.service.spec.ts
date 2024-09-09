import { TestBed } from '@angular/core/testing';

import { ActualToastService } from './actual-toast.service';

describe('ActualToastService', () => {
  let service: ActualToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
