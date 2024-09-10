import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-injection-resolution-example',
  templateUrl: './injection-resolution-example.component.html',
  styleUrls: ['./injection-resolution-example.component.scss']
})
export class InjectionResolutionExampleComponent implements OnInit {
  counters: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  add(): void {
    this.counters.push(this.counters.length);
  }

  remove(i: number): void {
    this.counters.splice(i, 1);
  }
}
