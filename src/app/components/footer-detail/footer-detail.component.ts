import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { LayoutService } from 'src/app/shared/layout.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-footer-detail',
  templateUrl: './footer-detail.component.html',
  styleUrls: ['./footer-detail.component.css']
})
export class FooterDetailComponent implements OnInit {
  year: string;

  constructor(public layoutService: LayoutService) {
    this.getCurrentYear();
  }

  getCurrentYear() {
    let date = new Date();
    let year = date.getFullYear();
    this.year = '' + year;
  }

  ngOnInit(): void {}
}
