import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-list',
  templateUrl: './footer-list.component.html',
  styleUrls: ['./footer-list.component.css'],
})
export class FooterListComponent implements OnInit {
  @Input() limit: number;
  @Input() type: string;
  @Input() links: { text: string; url: string }[];
  leftLinks :{ text: string; url: string }[] = [];
  rightLinks :{ text: string; url: string }[]= [];

  constructor() {}

  ngOnInit(): void {
    
    this.links.forEach((link, i) => {

      if(i < this.limit) {
        this.leftLinks.push(link);
      } else {

        this.rightLinks.push(link);
      }
    })
  }
}
