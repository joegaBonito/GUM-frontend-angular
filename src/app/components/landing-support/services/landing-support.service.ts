import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { of } from 'rxjs/observable/of';

import {SupportPost} from '../model/support-post';
import {SupportPosts} from '../model/mock-support-posts';

@Injectable()
export class LandingSupportService {
  start:number;
  sum:number = 9;
  items:SupportPost[] = [];
  realItems:SupportPost[] = [];
  noMoreData:boolean = false;

  constructor() {
    this.items = SupportPosts;
    console.log(this.items);
  }

  getInitialPosts():Observable<SupportPost[]> {
    for (let i = 0; i < this.sum; i ++) {
      this.realItems.push(this.items[i]);
    }
    return of(this.realItems);
  }

  onScrollDown():Observable<SupportPost[]> {
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

    getPost(id:number):SupportPost {
      for(let i = 0; i < this.items.length; i++) {
        if(id === this.items[i].id) {
          return this.items[i];
        }
      }
    }
}
