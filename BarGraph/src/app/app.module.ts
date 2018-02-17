import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	ChartsModule,
  IonRangeSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
