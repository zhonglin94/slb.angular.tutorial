import {Component, OnDestroy, OnInit} from '@angular/core';
import {filter, Subscription} from 'rxjs';
import {ThemeService} from "./theme.service";
import {ActualToastService} from "./di/toast/actual-toast.service";
import {AbstractToastService} from "./di/toast/abstract-toast.service";
import {NavigationEnd, Router} from "@angular/router";

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
    name: 'Router',
    path: 'router'
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

  constructor(private themeService: ThemeService,
              private actualToastService: ActualToastService,
              private abstractToastService: AbstractToastService,
              private router: Router) {
  }

  ngOnInit(): void {
    // TODO use the actual toast service to show the toast

    setInterval(() => {
      if (this.themeService.theme === 'light') {
        this.themeService.changeTheme('dark')
      } else {
        this.themeService.changeTheme('light')
      }
    }, 1000);

    this.abstractToastService.toast$.subscribe(toast => {
      this.actualToastService.showToast(toast.message as string);
    })
    this.autoSelectMenuItems()
  }

  private autoSelectMenuItems(): void {
    // TODO to be implemented
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(event => {
      console.log(event)
    })
  }

  private showActualToast(): void {
    // TODO to be implemented
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
