import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbstractToastExampleComponent } from './di/toast/abstract-toast-example/abstract-toast-example.component';

@NgModule({
  declarations: [
    AppComponent,
    AbstractToastExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
