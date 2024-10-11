import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ThemeService} from "./theme.service";

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

  constructor(private themeService: ThemeService) {
  }

  ngOnInit(): void {
    // TODO use the actual toast service to show the toast

    setInterval(() => {
      if (this.themeService.theme === 'light') {
        this.themeService.changeTheme('dark')
      } else {
        this.themeService.changeTheme('light')
      }
    }, 1000)
  }

  private autoSelectMenuItems(): void {
    // TODO to be implemented
  }

  private showActualToast(): void {
    // TODO to be implemented
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
