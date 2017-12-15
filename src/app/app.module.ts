import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LandingRequestComponent } from './components/landing-request/landing-request.component';
import { LandingSupportComponent } from './components/landing-support/landing-support.component';
import { GnbComponent } from './components/gnb/gnb.component';
import { LocationComponent } from './components/location/location.component';

//Services
import { LandingRequestService } from './components/landing-request/services/landing-request.service';
import { LandingSupportService } from './components/landing-support/services/landing-support.service';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'locations', component: LocationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingRequestComponent,
    LandingSupportComponent,
    GnbComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'GUM-SSR' }),
    RouterModule.forRoot(routes),
    InfiniteScrollModule
  ],
  providers: [
    LandingRequestService,
    LandingSupportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
     @Inject(PLATFORM_ID) private platformId: Object,
     @Inject(APP_ID) private appId: string) {
     const platform = isPlatformBrowser(platformId) ?
       'on the server' : 'in the browser';
     console.log(`Running ${platform} with appId=${appId}`);
   }

}
