import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LandingRequestComponent } from './components/landing-request/landing-request.component';
import { LandingSupportComponent } from './components/landing-support/landing-support.component';
import { GnbComponent } from './components/gnb/gnb.component';

//Services
import { LandingRequestService } from './components/landing-request/services/landing-request.service';

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
    InfiniteScrollModule,
  ],
  providers: [
    LandingRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
