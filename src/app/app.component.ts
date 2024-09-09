import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Throttle Example',
    path: 'throttle-example'
  },
  {
    name: 'Interceptor Example',
    path: 'interceptor-example'
  },
  {
    name: 'Color Button Example',
    path: 'color-button-example'
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
