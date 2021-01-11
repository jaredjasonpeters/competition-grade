import { ViewportScroller } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css'],
})
export class SiteDetailsComponent implements OnInit, AfterViewInit, OnDestroy {
  fragmentSub: Subscription;
  @ViewChild('container', { static: true })
  container: ElementRef<HTMLDivElement>;
  @ViewChild('privacy', { static: true }) privacy: ElementRef<HTMLDivElement>;
  @ViewChild('terms', { static: true }) terms: ElementRef<HTMLDivElement>;
  @ViewChild('sitemap', { static: true }) sitemap: ElementRef<HTMLDivElement>;

  sitemapData: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    // this.fragmentSub.unsubscribe();
  }
}
