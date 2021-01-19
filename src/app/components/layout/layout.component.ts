import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  @Output() layoutInfo: Subject<string> = new Subject();

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((res) => {
      if (res.matches) {
        this.layoutInfo.next('small');
      }
    });
    this.breakpointObserver.observe([Breakpoints.Small]).subscribe((res) => {
      if (res.matches) {
        this.layoutInfo.next('small');
      }
    });
    this.breakpointObserver.observe([Breakpoints.Medium]).subscribe((res) => {
      if (res.matches) {
        this.layoutInfo.next('medium');
      }
    });
    this.breakpointObserver.observe([Breakpoints.Large]).subscribe((res) => {
      if (res.matches) {
        this.layoutInfo.next('large');
      }
    });
  }
}
