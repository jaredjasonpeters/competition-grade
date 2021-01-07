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
  @Input() autoplayOptions?: { autoplay?: boolean; runOnce?: boolean };

  constructor(
    private sanitizer: DomSanitizer,
    private featuredVideoService: FeaturedVideoService
  ) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.getFeaturedVideoSub = this.featuredVideoService
      .getFeaturedVideo(this.autoplayOptions)
      .subscribe((videoURL) => {
        this.videoUrl = videoURL;
      });
  }

  ngOnDestroy(): void {
    this.getFeaturedVideoSub.unsubscribe();
  }
}
