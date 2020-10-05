import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-footer-detail',
  templateUrl: './footer-detail.component.html',
  styleUrls: ['./footer-detail.component.css'],
})
export class FooterDetailComponent implements OnInit {
  year: string;

  constructor() {
    this.getCurrentYear();
  }

  getCurrentYear() {
    let date = new Date();
    let year = date.getFullYear();
    this.year = '' + year;
  }

  ngOnInit(): void {}
}
