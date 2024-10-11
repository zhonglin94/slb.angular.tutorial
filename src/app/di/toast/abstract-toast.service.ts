import {Injectable} from '@angular/core';
import {debounceTime, Observable} from 'rxjs';
import {Subject} from 'rxjs/internal/Subject';

export enum AbstractToastLevel {
  Info,
  Success,
  Warn,
  Error
}

export class AbstractToast {
  level?: AbstractToastLevel;
  message?: string;
  title?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AbstractToastService {

  constructor() {
  }

  private readonly _toast$: Subject<AbstractToast> = new Subject<AbstractToast>();

  get toast$(): Observable<AbstractToast> {
    return this._toast$.asObservable().pipe(debounceTime(3000));
  }

  emit(toast: AbstractToast): void {
    this._toast$.next(toast);
  }

}
