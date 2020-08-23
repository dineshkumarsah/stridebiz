import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex2Component } from './ex2/ex2.component';
import { HeaderComponent } from './header/header.component';
import { Ex3Component } from './ex3/ex3.component';
import { MessageComponent } from './message/message.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    Ex2Component,
    HeaderComponent,
    Ex3Component,
    MessageComponent,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
