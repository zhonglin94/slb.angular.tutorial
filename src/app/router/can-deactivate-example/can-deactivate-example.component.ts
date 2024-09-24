import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-can-deactivate-example',
  templateUrl: './can-deactivate-example.component.html',
  styleUrls: ['./can-deactivate-example.component.scss']
})
export class CanDeactivateExampleComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


  isDirty(): boolean {
    return true;
  }
}
