import { Component, OnInit } from '@angular/core';
import { AbstractToastService } from './di/toast/abstract-toast.service';
import { ActualToastService } from './di/toast/actual-toast.service';

interface MenuItem {
  name: string;
  path: string;
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
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menuItems = menuItems;

  constructor(private abstractToastService: AbstractToastService,
              private actualToastService: ActualToastService) {

  }

  ngOnInit(): void {
    this.abstractToastService.toast$.subscribe(toast => {
      this.actualToastService.showToast(toast.message as string);
    });
  }

}
