import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThrottleExampleComponent } from './observable/throttle/throttle-example/throttle-example.component';

const routes: Routes = [
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
