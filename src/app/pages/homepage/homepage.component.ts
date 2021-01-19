import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  page;
  size;
  largeBreakpoints = {
    isLarge: true,
    colSize: 6,
    colSpan_L: 4,
    colSpan_R: 2,
    rowSpan_R: 1,
    rowHeight: '725px',
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
        console.log('MATCHES LARGE');
        console.log('RES LARGE', res);
        this.breakpoint = this.largeBreakpoints;
        this.size = 'large';
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
        this.size = 'small';
      }
    });
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((res) => {
      console.log('RES XSMALL', res);
      if (res.matches) {
        console.log('MATCHES SMALL');
        this.breakpoint = this.smallBreakpoints;
        this.size = 'small';
      }
    });
  }
}
