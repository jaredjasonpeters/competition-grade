import { Component, OnChanges, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { FeaturedVideoService } from 'src/app/shared/featured-video.service';
import { LayoutService } from '../../shared/layout.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: []
})
export class HomepageComponent implements OnInit, OnChanges {
  page;
  size: string;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    public layoutService: LayoutService,
    private videoService: FeaturedVideoService
  ) {
    this.titleService.setTitle('Competition Grade Seed');
  }

  ngOnInit(): void {
    this.videoService.setVideoByPage('default');
  }

  ngOnChanges(): void {}
}
