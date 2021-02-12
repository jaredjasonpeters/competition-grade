import { Component, OnDestroy, OnInit } from '@angular/core';
import { DistributorsService } from 'src/app/shared/distributors.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/shared/layout.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [LayoutService],
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

  constructor(
    private distributorsService: DistributorsService,
    private authService: AuthService,
    public layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    this.distributorsLength = this.distributorsService.getLength();
    this.footerLength = this.distributorsLength + 7;
    this.loggedInSubscription = this.authService.distributor.subscribe(
      (distributor) => {
        this.distributorLoggedIn = distributor ? true : false;
      }
    );
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

  ngOnDestroy(): void {
    this.loggedInSubscription.unsubscribe();
  }
}
