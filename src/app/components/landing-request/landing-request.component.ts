import { Component, OnInit } from '@angular/core';
import {LandingRequestService}  from './services/landing-request.service';
import {RequestPost} from './model/request-post';

@Component({
  selector: 'app-landing-request',
  templateUrl: './landing-request.component.html',
  styleUrls: ['./landing-request.component.css']
})
export class LandingRequestComponent implements OnInit {

  items:RequestPost[] = [];
  stopTheDownScroll:boolean = false;

  constructor(private landingRequestService:LandingRequestService) {
      this.landingRequestService.getInitialPosts().subscribe(items => this.items = items);
  }

  ngOnInit() {
  }

  onScrollDown () {
    this.landingRequestService.onScrollDown().subscribe((items) => {this.items = items});
    this.stopTheDownScroll =  this.landingRequestService.checkIfDataIsNoMore();
    console.log('scrolled!!');
  }
}
