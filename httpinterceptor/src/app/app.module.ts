import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MyHttpInterceptor } from "./my-http-interceptor";
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: MyHttpInterceptor, 
    multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
