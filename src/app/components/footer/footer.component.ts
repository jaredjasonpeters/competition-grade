import { Component, OnDestroy, OnInit } from '@angular/core';
import { DistributorsService } from 'src/app/shared/distributors.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, OnDestroy {
  distributorsLength: number;
  footerLength: number;
  distributorLoggedIn: boolean;
  loggedInSubscription: Subscription;

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

  constructor(
    private distributorsService: DistributorsService,
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.distributorsLength = this.distributorsService.getLength();
    this.footerLength = this.distributorsLength + 7;
    this.loggedInSubscription = this.authService.distributor.subscribe(
      (distributor) => {
        this.distributorLoggedIn = distributor ? true : false;
      }
    );
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

  ngOnDestroy(): void {
    this.loggedInSubscription.unsubscribe();
  }
}
