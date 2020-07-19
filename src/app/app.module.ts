import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents:[CalendarComponent]
})
export class AppModule {
  constructor(injector:Injector) {
    const cust = createCustomElement(CalendarComponent,{injector});
    customElements.define('custom-calendar',cust);
  }

  ngDoBootstrap() {}

 }
