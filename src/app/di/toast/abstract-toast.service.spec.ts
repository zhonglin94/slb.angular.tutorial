import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {AbstractToast, AbstractToastLevel, AbstractToastService} from './abstract-toast.service';

describe('AbstractToastService', () => {
  let service: AbstractToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the toast', (done) => {
    const mockToast: AbstractToast = {
      title: 'test',
      level: AbstractToastLevel.Success
    }
    const sub = service.toast$.subscribe(toast => {
      expect(toast).toEqual(mockToast);
      sub.unsubscribe()
      done()
    })
    service.emit(mockToast);
  })
});
