import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { FeaturedVideoService } from '../../shared/featured-video.service';

@Component({
  selector: 'app-featured-video',
  templateUrl: './featured-video.component.html',
  styleUrls: ['./featured-video.component.css'],
})
export class FeaturedVideoComponent implements OnInit, OnChanges, OnDestroy {
  videoUrl: SafeResourceUrl;
  getFeaturedVideoSub: Subscription;

  @Input() page;
  @Input() autoplay: boolean = false;
  @Input() autoplayOptions?: { runOnce?: boolean };

  constructor(
    private sanitizer: DomSanitizer,
    private featuredVideoService: FeaturedVideoService
  ) {}

  ngOnInit(): void {
    this.getFeaturedVideoSub = this.featuredVideoService
      .getFeaturedVideo()
      .subscribe((videoURL) => {
        this.videoUrl = videoURL;
      });
    this.featuredVideoService.autoplay = this.autoplay;
    this.featuredVideoService.autoplayOptions = this.autoplayOptions;
  }
  ngOnChanges(): void {}

  ngOnDestroy(): void {
    this.getFeaturedVideoSub.unsubscribe();
  }
}
