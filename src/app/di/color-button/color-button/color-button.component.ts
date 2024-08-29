import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.scss']
})
export class ColorButtonComponent implements OnInit {
  @Input() color: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
