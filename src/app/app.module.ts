import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './di/interceptor/auth.interceptor';
import { AbstractToastExampleComponent } from './di/toast/abstract-toast-example/abstract-toast-example.component';
import { ColorButtonExampleComponent } from './di/color-button/color-button-example/color-button-example.component';
import { ColorButtonComponent } from './di/color-button/color-button/color-button.component';
import { ThrottleExampleComponent } from './observable/throttle/throttle-example/throttle-example.component';
import { InterceptorExampleComponent } from './di/interceptor/interceptor-example/interceptor-example.component';
import { InjectionResolutionExampleComponent } from './di/injection-resolution/injection-resolution-example.component';
import { CounterComponent } from './di/injection-resolution/counter/counter.component';
import { ProtectedRouteExampleComponent } from './router/protected-route-example/protected-route-example.component';
import { CanDeactivateExampleComponent } from './router/can-deactivate-example/can-deactivate-example.component';

@NgModule({
  declarations: [
    AppComponent,
    AbstractToastExampleComponent,
    ColorButtonExampleComponent,
    ColorButtonComponent,
    ThrottleExampleComponent,
    InterceptorExampleComponent,
    InjectionResolutionExampleComponent,
    CounterComponent,
    ProtectedRouteExampleComponent,
    CanDeactivateExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
