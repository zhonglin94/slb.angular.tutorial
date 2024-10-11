import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterDemoComponent} from './router-demo/router-demo.component';
import {RouterLinkWithHref, RouterModule, Routes} from "@angular/router";
import {ProtectedRouteExampleComponent} from "./protected-route-example/protected-route-example.component";
import {CanDeactivateExampleComponent} from "./can-deactivate-example/can-deactivate-example.component";

const routes: Routes = [
  {
    path: '',
    component: RouterDemoComponent,
    children: [
      {
        path: 'protected-route-example',
        component: ProtectedRouteExampleComponent,
      },
      {
        path: 'dirty-guard-example',
        component: CanDeactivateExampleComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    RouterDemoComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterLinkWithHref,
  ]
})
export class RouterDemoModule {
}
