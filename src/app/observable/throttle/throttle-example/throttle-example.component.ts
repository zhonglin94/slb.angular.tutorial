import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs/internal/Subject";
import {filter, throttleTime} from "rxjs";

@Component({
  selector: 'app-throttle-example',
  templateUrl: './throttle-example.component.html',
  styleUrls: ['./throttle-example.component.scss']
})
export class ThrottleExampleComponent implements OnInit {
  private throttleTime = 1000;
  private lastClick = Date.now() - this.throttleTime;
  private count = 0;
  logs: string[] = [];
  private click$$ = new Subject<number>();

  constructor() {
  }

  ngOnInit(): void {
    this.throttleClickRxjs()
  }

  onClick(): void {
    // this.throttledClickPlainJavascript();
    this.click$$.next(Math.random())
  }

  private throttleClickRxjs(): void {
    this.click$$.pipe(
      throttleTime(1000),
      filter((value) => value > 0.5)
    ).subscribe(() => {
      this.doHeavyTaskAndPrintLog()
    })
  }

  private throttledClickPlainJavascript(): void {
    if ((Date.now() - this.lastClick) > this.throttleTime) {
      this.doHeavyTaskAndPrintLog()
      this.lastClick = Date.now();
    }
  }

  private doHeavyTaskAndPrintLog(): void {
    ThrottleExampleComponent.doHeavyTask();
    this.logs.push(`Clicked ${++this.count} times`);
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
