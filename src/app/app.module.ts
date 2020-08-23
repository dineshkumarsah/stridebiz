import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex2Component } from './ex2/ex2.component';
import { HeaderComponent } from './header/header.component';
import { Ex3Component } from './ex3/ex3.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex2Component,
    HeaderComponent,
    Ex3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
