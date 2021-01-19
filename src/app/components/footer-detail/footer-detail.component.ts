import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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

  isMobileLayout: boolean;

  largeBreakpoints = {
    isLarge: true,
    colSize: 6,
    colSpan_L: 4,
    colSpan_R: 2,
    rowSpan_R: 1,
    rowHeight: '780px',
  };

  smallBreakpoints = {
    isSmall: true,
    colSize: 1,
    colSpan_L: 1,
    colSpan_R: 1,
    rowSpan_R: 2,
    rowHeight: '50vh',
  };
  breakpoint;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.getCurrentYear();
  }

  getCurrentYear() {
    let date = new Date();
    let year = date.getFullYear();
    this.year = '' + year;
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Large]).subscribe((res) => {
      if (res.matches) {
        console.log('MATCHES LARGE');
        console.log('RES LARGE', res);
        this.breakpoint = this.largeBreakpoints;
        this.isMobileLayout = false;
      }
    });
    this.breakpointObserver.observe([Breakpoints.Medium]).subscribe((res) => {
      if (res.matches) {
        console.log('MATCHES MEDIUM');
        this.breakpoint = this.smallBreakpoints;
      }
    });
    this.breakpointObserver.observe([Breakpoints.Small]).subscribe((res) => {
      if (res.matches) {
        console.log('MATCHES SMALL');
        this.breakpoint = this.smallBreakpoints;
        this.isMobileLayout = true;
      }
    });
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((res) => {
      console.log('RES XSMALL', res);
      if (res.matches) {
        console.log('MATCHES SMALL');
        this.breakpoint = this.smallBreakpoints;
        this.isMobileLayout = true;
      }
    });
  }
}
