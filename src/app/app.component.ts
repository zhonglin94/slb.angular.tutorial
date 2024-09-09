import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Throttle Example',
    path: 'throttle-example'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems = menuItems;
}
