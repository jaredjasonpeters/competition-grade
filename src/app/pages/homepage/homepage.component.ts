import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit, OnChanges {
  page;
  isMobileLayout;
  largeBreakpoints = {
    isLarge: true,
    colSize: 6,
    colSpan_L: 4,
    colSpan_R: 2,
    rowSpan_R: 1,
    rowHeight: '780px',
  };

  mediumBreakpoints = {
    isLarge: true,
    colSize: 6,
    colSpan_L: 4,
    colSpan_R: 2,
    rowSpan_R: 1,
    rowHeight: '418px',
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

  size;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver
  ) {
    titleService.setTitle('Competition Grade Seed');
  }

  ngOnInit(): void {
    this.page = this.route.snapshot.url.join();
    this.breakpointObserver.observe([Breakpoints.Large]).subscribe((res) => {
      if (res.matches) {
        this.breakpoint = this.largeBreakpoints;
        this.isMobileLayout = false;
      }
    });
    this.breakpointObserver.observe([Breakpoints.Medium]).subscribe((res) => {
      if (res.matches) {
        this.breakpoint = this.mediumBreakpoints;
      }
    });
    this.breakpointObserver.observe([Breakpoints.Small]).subscribe((res) => {
      if (res.matches) {
        this.breakpoint = this.smallBreakpoints;
        this.isMobileLayout = true;
      }
    });
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((res) => {
      if (res.matches) {
        this.breakpoint = this.smallBreakpoints;
        this.isMobileLayout = true;
      }
    });
  }

  ngOnChanges(): void {}
}
