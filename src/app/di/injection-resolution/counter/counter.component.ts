import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [CounterService]
})
export class CounterComponent implements OnInit {

  constructor(public counterService: CounterService) {
  }

  ngOnInit(): void {
  }
}
