import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

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
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
