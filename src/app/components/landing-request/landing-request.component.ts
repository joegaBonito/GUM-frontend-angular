import { Component, OnInit } from '@angular/core';
import {LandingRequestService}  from './services/landing-request.service';
import {RequestPost} from './model/request-post';

@Component({
  selector: 'app-landing-request',
  templateUrl: './landing-request.component.html',
  styleUrls: ['./landing-request.component.css']
})
export class LandingRequestComponent implements OnInit {
  sum = 9;
  items:RequestPost[] = [];

  constructor(private landingRequestService:LandingRequestService) {
      this.landingRequestService.getInitialPosts().subscribe(items => this.items = items);
  }

  ngOnInit() {
  }

  onScrollDown () {
    console.log('scrolled!!');
    // add another 6 items
    const start = this.sum;
    this.sum += 3;
      for (let i = start; i < this.sum; ++i) {
        this.items.push(this.landingRequestService.getPost(i));
      }
    }
}
