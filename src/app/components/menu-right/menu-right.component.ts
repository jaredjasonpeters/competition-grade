import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { FeaturedVideoService } from 'src/app/shared/featured-video.service';

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.css'],
})
export class MenuRightComponent implements OnInit, OnChanges {
  largeBreakpoints = {
    colSize: 6,
    rowSpan_V: 7,
    rowSpan_F: 2,
    rowSpan_S: 5,
    rowHeight: 725 / 14 + 'px',
  };

  smallBreakpoints = {
    colSize: 1,
    rowSpan_V: 1,
    rowSpan_F: 1,
    rowSpan_S: 1,
    rowHeight: '33.3%',
  };

  breakpoint;

  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private featuredVideoService: FeaturedVideoService,
    private breakpointObserver: BreakpointObserver
  ) {}
  @Input() page;
  @Input() features: string[] = ['all'];
  @ViewChild('menu', { static: true }) menu: ElementRef;

  ngOnInit(): void {
    let root = this.route.url.subscribe((root) => console.log('ROOT', root));
    this.route.parent.url.subscribe((url) => console.log('URL', url));

    this.breakpointObserver.observe([Breakpoints.Large]).subscribe((res) => {
      if (res.matches) {
        console.log('MATCHES LARGE');
        this.breakpoint = this.largeBreakpoints;
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
      }
    });
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((res) => {
      if (res.matches) {
        console.log('MATCHES SMALL');
        this.breakpoint = this.smallBreakpoints;
      }
    });
  }

  ngOnChanges(): void {
    console.log('THIS PAGE', this.page);

    if (['power', 'speed', 'agility'].includes(this.page)) {
      this.renderer.setStyle(
        this.menu.nativeElement,
        'background',
        `var(--cg_${this.page})`
      );
      this.featuredVideoService.setVideoBySeries(this.page);
    } else {
      this.featuredVideoService.setVideoByPage(this.page);
    }
  }
}
