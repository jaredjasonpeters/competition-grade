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
import { LayoutService } from 'src/app/shared/layout.service';

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.css'],
  providers: [LayoutService],
})
export class MenuRightComponent implements OnInit, OnChanges {
  // largeBreakpoints = {
  //   colSize: 6,
  //   rowSpan_V: 7,
  //   rowSpan_F: 2,
  //   rowSpan_S: 5,
  //   rowHeight: 725 / 14 + 'px',
  // };

  // smallBreakpoints = {
  //   colSize: 1,
  //   rowSpan_V: 1,
  //   rowSpan_F: 1,
  //   rowSpan_S: 1,
  //   rowHeight: '33.3%',
  // };

  // breakpoint;

  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private featuredVideoService: FeaturedVideoService // public layoutService: LayoutService
  ) {}
  @Input() page;
  @Input() features: string[];
  @ViewChild('menu', { static: true }) menu: ElementRef;
  @ViewChild('videoTile', { static: true }) videoTile: ElementRef;

  ngOnInit(): void {
    this.featuredVideoService.setVideoByPage(this.page);
    // this.route.parent.url.subscribe((url) => console.log('URL', url));
  }

  ngOnChanges(): void {
    if (['power', 'speed', 'agility'].includes(this.page)) {
      this.renderer.setStyle(
        this.menu.nativeElement,
        'background',
        `var(--cg_${this.page})`
      );
      this.featuredVideoService.setVideoByPage(this.page);
    }
  }
}
