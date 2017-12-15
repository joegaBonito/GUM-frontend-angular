import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId:Object) { }

  ngOnInit() {
    if(isPlatformBrowser(this.platformId)){
      //Browser Only Code
    } else {
      //Server Only Code
    }
  }

}
