import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protected-route-example',
  templateUrl: './protected-route-example.component.html',
  styleUrls: ['./protected-route-example.component.scss']
})
export class ProtectedRouteExampleComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  isDirty(): boolean {
    return true;
  }
}
