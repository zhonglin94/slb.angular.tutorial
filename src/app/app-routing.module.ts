import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ColorButtonExampleComponent} from './di/color-button/color-button-example/color-button-example.component';
import {InjectionResolutionExampleComponent} from './di/injection-resolution/injection-resolution-example.component';
import {InterceptorExampleComponent} from './di/interceptor/interceptor-example/interceptor-example.component';
import {ThrottleExampleComponent} from './observable/throttle/throttle-example/throttle-example.component';
import {AuthGuard} from './router/auth.guard';
import {CanDeactivateExampleComponent} from './router/can-deactivate-example/can-deactivate-example.component';
import {DirtyGuard} from './router/dirty.guard';
import {ProtectedRouteExampleComponent} from './router/protected-route-example/protected-route-example.component';

const routes: Routes = [
  {
    path: 'color-button-example',
    component: ColorButtonExampleComponent
  },
  {
    path: 'throttle-example',
    component: ThrottleExampleComponent
  },
  {
    path: 'interceptor-example',
    component: InterceptorExampleComponent
  },
  {
    path: 'injection-resolution-example',
    component: InjectionResolutionExampleComponent
  },
  {
    path: 'router',
    loadChildren: () => import('./router/router-demo.module')
      .then(m => m.RouterDemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
