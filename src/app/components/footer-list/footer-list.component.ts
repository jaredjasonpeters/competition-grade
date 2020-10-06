import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-list',
  templateUrl: './footer-list.component.html',
  styleUrls: ['./footer-list.component.css'],
})
export class FooterListComponent implements OnInit {
  @Input() type: string;
  @Input() links: { text: string; url: string }[];

  constructor() {}

  ngOnInit(): void {
    console.log('TYPE', this.type);
  }
}
