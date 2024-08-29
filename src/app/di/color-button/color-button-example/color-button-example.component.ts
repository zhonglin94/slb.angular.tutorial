import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-button-example',
  templateUrl: './color-button-example.component.html',
  styleUrls: ['./color-button-example.component.scss']
})
export class ColorButtonExampleComponent implements OnInit {
  color = 'red';

  constructor() {
  }

  ngOnInit(): void {
  }

}
