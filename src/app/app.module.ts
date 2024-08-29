import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
