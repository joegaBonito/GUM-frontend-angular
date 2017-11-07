import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LandingRequestComponent } from './components/landing-request/landing-request.component';
import { LandingSupportComponent } from './components/landing-support/landing-support.component';
import { GnbComponent } from './components/gnb/gnb.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingRequestComponent,
    LandingSupportComponent,
    GnbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
