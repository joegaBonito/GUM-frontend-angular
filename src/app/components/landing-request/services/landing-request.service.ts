import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { of } from 'rxjs/observable/of';

import {RequestPost} from '../model/request-post';
import {RequestPosts} from '../model/mock-request-post';

@Injectable()
export class LandingRequestService {

  items:RequestPost[] = [];

  constructor() { }

  getPosts() {
      return RequestPosts;
  }

  getInitialPosts():Observable<RequestPost[]> {
    for (let i = 0; i < 9; i ++) {
      this.items.push(RequestPosts[i]);
    }
    return of(this.items);
  }

  getPost(id:number):RequestPost {
    for(let i = 0; i < RequestPosts.length; i++) {
      if(id === RequestPosts[i].id) {
        return RequestPosts[i];
      }
    }
  }
}
