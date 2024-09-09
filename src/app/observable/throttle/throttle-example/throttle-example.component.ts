import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-throttle-example',
  templateUrl: './throttle-example.component.html',
  styleUrls: ['./throttle-example.component.scss']
})
export class ThrottleExampleComponent implements OnInit {
  private throttleTime = 1000;
  private lastClick = Date.now() - this.throttleTime;
  private count = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.throttledClickPlainJavascript();
  }

  private throttledClickPlainJavascript(): void {
    if ((Date.now() - this.lastClick) > this.throttleTime) {
      ThrottleExampleComponent.doHeavyTask();
      console.log(`Clicked ${++this.count} times`);
      this.lastClick = Date.now();
    }
  }

  private static doHeavyTask(): void {
    fib(10);
  }
}

function fib(n: number): number {
  if (n <= 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}
