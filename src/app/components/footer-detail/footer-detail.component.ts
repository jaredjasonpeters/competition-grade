import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { LayoutService } from 'src/app/shared/layout.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-footer-detail',
  templateUrl: './footer-detail.component.html',
  styleUrls: ['./footer-detail.component.css'],
  providers: [LayoutService],
})
export class FooterDetailComponent implements OnInit {
  year: string;

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

  constructor(public layoutService: LayoutService) {
    this.getCurrentYear();
  }

  getCurrentYear() {
    let date = new Date();
    let year = date.getFullYear();
    this.year = '' + year;
  }

  getBreakpoints(size) {
    switch (size) {
      case 'mobile':
        {
          this.breakpoint = this.smallBreakpoints;
        }
        break;
      case 'tablet':
        {
          this.breakpoint = this.mediumBreakpoints;
        }
        break;
      case 'desktop':
      case 'largeDesktop':
        this.breakpoint = this.largeBreakpoints;
    }
  }

  ngOnInit(): void {
    this.layoutService
      .getScreenSize()
      .pipe(
        tap((size) => {
          this.getBreakpoints(size);
        })
      )
      .subscribe();
  }
}
