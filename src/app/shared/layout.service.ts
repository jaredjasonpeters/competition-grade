import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Injectable()
export class LayoutService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  getScreenSize(): Observable<any> {
    return this.breakpointObserver.observe(Breakpoints.Large);
  }
}
