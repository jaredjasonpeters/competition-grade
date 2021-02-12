import { Component, OnChanges, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { LayoutService } from '../../shared/layout.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [LayoutService],
})
export class HomepageComponent implements OnInit, OnChanges {
  page;
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
  breakpoint = {
    colSize: null,
    colSpan_L: null,
    colSpan_R: null,
    rowSpan_R: null,
    rowHeight: null,
  };

  size: string;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    public layoutService: LayoutService
  ) {
    this.titleService.setTitle('Competition Grade Seed');
  }

  ngOnInit(): void {
    this.page = this.route.snapshot.url.join();
    this.layoutService
      .getScreenSize()
      .pipe(
        tap((size) => {
          this.getBreakpoints(size);
        })
      )
      .subscribe();
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

  ngOnChanges(): void {}
}
