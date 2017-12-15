import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-gnb',
  templateUrl: './gnb.component.html',
  styleUrls: ['./gnb.component.css']
})
export class GnbComponent implements OnInit {

  innerWidth:any;
  show:boolean = false;
  showTogglerIcon:boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId:Object) {

 }

  ngOnInit() {
    if(isPlatformBrowser(this.platformId)){
      //Gets the resolution width of the screen on load.
      this.innerWidth = window.innerWidth;
      if(this.innerWidth < 992) {
        this.show = false;
        this.showTogglerIcon=true;
      } else {
        this.show=true;
      }
    } else {
      //Server Only Code
    }
  }

  //Gets the resolution width of the screen on resize.
  onResize(event) {
   this.innerWidth = event.target.innerWidth;
   if (this.innerWidth < 992) {
      this.show = false;
      this.showTogglerIcon = false;
   } else {
     this.show = true;
     this.showTogglerIcon = true;
   }
}
  //Toggle GNB if the resolution is below 992px
  toggleCollapse() {
    if(this.innerWidth < 992)
      this.show = !this.show;
  }

  //Make 'show' false on clicking the logo if the resolution is below 992px
  onClickLogo() {
    if(this.innerWidth < 992)
      this.show = false;
  }

}
