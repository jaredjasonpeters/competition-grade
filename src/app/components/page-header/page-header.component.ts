import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent implements OnInit, OnChanges {
  @Input() title: string;
  gold: string = '';
  white: string = '';
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.getFormattedTitle();
  }

  getFormattedTitle() {
    let title = this.title;
    let gold: string;
    let white: string;

    if (title.includes('>>')) {
      [gold, white] = title.split('>>');
      this.gold = `${gold} >>`;
      this.white = ` ${white}`;
    } else {
      let words = title.split(' ');
      if (words.length > 1) {
        console.log('WORDS', words);
        words.forEach((word, i) => {
          if (i / words.length < 0.5) {
            this.gold += word + ' ';
          } else {
            this.white += word + ' ';
          }
        });
      } else {
        console.log('TITLE', title);
        this.gold = title;
      }
    }
  }
}
