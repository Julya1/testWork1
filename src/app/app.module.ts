import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.modules';
import { P3Component } from './core/components/p3/p3.component';
import { P1Component } from './core/components/p1/p1.component';
import { P2Component } from './core/components/p2/p2.component';
import { P4Component } from './core/components/p4/p4.component';

@NgModule({
  declarations: [
    AppComponent,
    P1Component,
    P2Component,
    P3Component,
    P4Component
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
