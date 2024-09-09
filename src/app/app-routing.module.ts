import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorButtonExampleComponent } from './di/color-button/color-button-example/color-button-example.component';
import { ThrottleExampleComponent } from './observable/throttle/throttle-example/throttle-example.component';

const routes: Routes = [
  {
    path: 'color-button-example',
    component: ColorButtonExampleComponent
  },
  {
    path: 'throttle-example',
    component: ThrottleExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
