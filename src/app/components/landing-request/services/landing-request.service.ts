import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { of } from 'rxjs/observable/of';

import {RequestPost} from '../model/request-post';
import {RequestPosts} from '../model/mock-request-post';

@Injectable()
export class LandingRequestService {
  start:number;
  sum:number = 9;
  items:RequestPost[] = [];
  realItems:RequestPost[] = [];
  noMoreData:boolean = false;

  constructor() {
    this.items = RequestPosts;
    console.log(this.items);
  }

  getInitialPosts():Observable<RequestPost[]> {
    for (let i = 0; i < this.sum; i ++) {
      this.realItems.push(this.items[i]);
    }
    return of(this.realItems);
  }

  onScrollDown():Observable<RequestPost[]> {
    // add another 3 items
    this.start = this.sum;
    this.sum += 3;
      for (let i = this.start; i < this.sum; ++i) {
          if(this.items[this.start] === null) {
            this.noMoreData = true;
            return of(this.realItems);
          }
          this.realItems.push(this.items[i]);
      }
      return of(this.realItems);
    }

    checkIfDataIsNoMore():boolean {
      return this.noMoreData;
    }

    getPost(id:number):RequestPost {
      for(let i = 0; i < this.items.length; i++) {
        if(id === this.items[i].id) {
          return this.items[i];
        }
      }
    }
}
