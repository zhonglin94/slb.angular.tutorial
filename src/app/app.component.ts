import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

interface MenuItem {
  name: string;
  path: string;
  selected?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: 'Throttle',
    path: 'throttle-example'
  },
  {
    name: 'Interceptor',
    path: 'interceptor-example'
  },
  {
    name: 'Color Button',
    path: 'color-button-example'
  },
  {
    name: 'Injection Resolution',
    path: 'injection-resolution-example'
  },
  {
    name: 'Auth Guard Route',
    path: 'protected-route-example'
  },
  {
    name: 'Dirty Guard Route',
    path: 'dirty-guard-example'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  menuItems = menuItems;
  private sub: Subscription | undefined;

  constructor(private router: Router,) {
  }

  ngOnInit(): void {
    // TODO use the acutal toast service to show the toast

    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e) => {
        const navEnd = e as NavigationEnd;
        this.menuItems.forEach(menu => {
          menu.selected = navEnd.url.includes(menu.path);
        });
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
