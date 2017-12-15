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

//Services
import { LandingRequestService } from './components/landing-request/services/landing-request.service';
import { LandingSupportService } from './components/landing-support/services/landing-support.service';

const routes: Routes = [
  { path: '', component: LandingComponent }
];

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
    RouterModule.forRoot(routes),
    InfiniteScrollModule,
  ],
  providers: [
    LandingRequestService,
    LandingSupportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
