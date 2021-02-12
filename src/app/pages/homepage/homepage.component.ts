import { Component, OnChanges, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from '../../shared/layout.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [LayoutService],
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
    private LayoutService: LayoutService
  ) {
    this.titleService.setTitle('Competition Grade Seed');
  }

  ngOnInit(): void {
    this.page = this.route.snapshot.url.join();
    this.LayoutService.getScreenSize().subscribe((res) => {
      console.log('RESULT OF LAYOUT SERVICE', res);
    });
  }

  getLayoutInfo(size: string) {
    this.size = size;
    switch (size) {
      case 'small':
        {
          this.breakpoint = this.smallBreakpoints;
          this.isMobileLayout = true;
        }
        break;
      case 'medium':
        {
          this.breakpoint = this.mediumBreakpoints;
          this.isMobileLayout = false;
        }
        break;
      case 'large':
        this.breakpoint = this.largeBreakpoints;
        this.isMobileLayout = false;
    }
  }

  ngOnChanges(): void {}
}
