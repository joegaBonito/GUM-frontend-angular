import { Component, OnInit } from '@angular/core';
import {LandingSupportService}  from './services/landing-support.service';
import {SupportPost} from './model/support-post';

@Component({
  selector: 'app-landing-support',
  templateUrl: './landing-support.component.html',
  styleUrls: ['./landing-support.component.css']
})
export class LandingSupportComponent implements OnInit {

  items:SupportPost[] = [];
  stopTheDownScroll:boolean = false;

  constructor(private landingSupportService:LandingSupportService) {
      this.landingSupportService.getInitialPosts().subscribe(items => this.items = items);
  }

  ngOnInit() {
  }

  onScrollDown () {
    this.landingSupportService.onScrollDown().subscribe((items) => {this.items = items});
    this.stopTheDownScroll =  this.landingSupportService.checkIfDataIsNoMore();
    console.log('scrolled!!');
  }
}
