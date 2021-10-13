import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CdComponent } from './cd/cd.component';
import { Cd1Component } from './cd1/cd1.component';

@NgModule({
  declarations: [
    AppComponent,
    CdComponent,
    Cd1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
