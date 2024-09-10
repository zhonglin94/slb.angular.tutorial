import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  value = 0;

  constructor() {
  }

  increase(): void {
    this.value++;
  }

  decrease(): void {
    this.value--;
  }
}
