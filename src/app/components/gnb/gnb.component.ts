import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gnb',
  templateUrl: './gnb.component.html',
  styleUrls: ['./gnb.component.css']
})
export class GnbComponent implements OnInit {

  autoClose:boolean = true;

  constructor() { }

  ngOnInit() {
  }
  onClickDrop($event) {
    console.log($event.target);
  }
}
