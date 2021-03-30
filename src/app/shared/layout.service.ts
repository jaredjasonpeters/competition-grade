import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { Observable, merge, Subject, BehaviorSubject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable()
export class LayoutService {
  constructor(private breakpointObserver: BreakpointObserver) {}
  private isMobileSubject$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  isMobile$: Observable<boolean> = this.isMobileSubject$.asObservable();
  private isTabletSubject$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  isTablet$: Observable<boolean> = this.isTabletSubject$.asObservable();
  private isDesktopSubject$: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  isDesktop$: Observable<boolean> = this.isDesktopSubject$.asObservable();

  getScreenSize(): Observable<string> {
    return merge(
      this.breakpointObserver.observe(Breakpoints.XSmall),
      this.breakpointObserver.observe(Breakpoints.Small),
      this.breakpointObserver.observe(Breakpoints.Medium),
      this.breakpointObserver.observe('(min-width: 1280px)')
    ).pipe(
      filter(bp => {
        return bp.matches === true;
      }),
      map(v => {
        return this.mapBreakpointsToString(Object.keys(v.breakpoints).join());
      }),
      tap(size => {
        if (size === 'mobile') {
          this.isMobileSubject$.next(true);
        } else {
          this.isMobileSubject$.next(false);
        }
        if (size === 'tablet') {
          this.isTabletSubject$.next(true);
        } else {
          this.isTabletSubject$.next(false);
        }
        if (size === 'desktop') {
          this.isDesktopSubject$.next(true);
        } else {
          this.isDesktopSubject$.next(false);
        }
      })
    );
  }

  mapBreakpointsToString(bpKey) {
    const bpMap = {
      '(max-width: 599.99px)': 'mobile',
      '(min-width: 600px) and (max-width: 959.99px)': 'tablet',
      '(min-width: 1280px)': 'desktop'
    };
    return bpMap[bpKey];
  }
}
