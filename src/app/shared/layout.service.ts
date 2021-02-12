import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
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

  getScreenSize(): Observable<string> {
    return merge(
      this.breakpointObserver.observe(Breakpoints.XSmall),
      this.breakpointObserver.observe(Breakpoints.Small),
      this.breakpointObserver.observe(Breakpoints.Medium),
      this.breakpointObserver.observe(Breakpoints.Large),
      this.breakpointObserver.observe(Breakpoints.XLarge)
    ).pipe(
      filter((bp) => {
        return bp.matches === true;
      }),
      map((v) =>
        this.mapBreakpointsToString(Object.keys(v.breakpoints).join())
      ),
      tap((size) => {
        if (size === 'mobile') {
          this.isMobileSubject$.next(true);
        } else {
          this.isMobileSubject$.next(false);
        }
      })
    );
  }

  mapBreakpointsToString(bpKey) {
    const bpMap = {
      '(max-width: 599.99px)': 'mobile',
      '(min-width: 600px) and (max-width: 959.99px)': 'tablet',
      '(min-width: 960px) and (max-width: 1279.99px)': 'desktop',
      '(min-width: 1280px) and (max-width: 1919.99px)': 'largeDesktop',
    };
    return bpMap[bpKey];
  }
}
