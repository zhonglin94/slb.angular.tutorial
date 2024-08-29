import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './di/interceptor/auth.interceptor';
import { AbstractToastExampleComponent } from './di/toast/abstract-toast-example/abstract-toast-example.component';
import { ColorButtonExampleComponent } from './di/color-button/color-button-example/color-button-example.component';
import { ColorButtonComponent } from './di/color-button/color-button/color-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AbstractToastExampleComponent,
    ColorButtonExampleComponent,
    ColorButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
