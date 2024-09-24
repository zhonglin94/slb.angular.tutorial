import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AbstractToastService } from './di/toast/abstract-toast.service';
import { ActualToastService } from './di/toast/actual-toast.service';

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
    name: 'Projected Route',
    path: 'protected-route-example'
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

  constructor(private abstractToastService: AbstractToastService,
              private router: Router,
              private actualToastService: ActualToastService) {

  }

  ngOnInit(): void {
    this.abstractToastService.toast$.subscribe(toast => {
      this.actualToastService.showToast(toast.message as string);
    });

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
