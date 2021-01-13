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
  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private featuredVideoService: FeaturedVideoService
  ) {}
  @Input() page;
  @Input() features: string[] = ['all'];
  @ViewChild('menu', { static: true }) menu: ElementRef;

  ngOnInit(): void {
    let root = this.route.url.subscribe((root) => console.log('ROOT', root));
    this.route.parent.url.subscribe((url) => console.log('URL', url));
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
