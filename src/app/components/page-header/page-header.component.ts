import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit, OnChanges {
  @Input() title: string;
  gold: string;
  white: string;
  constructor() { }



  ngOnInit(): void {
    // this.getFormattedTitle();
  }

  ngOnChanges(): void {
    this.getFormattedTitle();
  }

  getFormattedTitle() {
    let title = this.title;
    let [gold, white] = title.split('>>');
    this.gold = `${gold} >>`
    this.white = ` ${white}`
  }

}
