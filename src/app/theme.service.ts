import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme$$ = new BehaviorSubject<Theme>('light');

  constructor() {
  }

  theme$(): Observable<Theme> {
    return this.theme$$.asObservable()
  }

  get theme(): Theme {
    return this.theme$$.value
  }

  changeTheme(them: Theme): void {
    this.theme$$.next(them)
  }
}
