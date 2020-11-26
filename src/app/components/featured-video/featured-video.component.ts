import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FeaturedVideoService } from '../../shared/featured-video.service';

@Component({
  selector: 'app-featured-video',
  templateUrl: './featured-video.component.html',
  styleUrls: ['./featured-video.component.css'],
})
export class FeaturedVideoComponent implements OnInit, OnChanges {
  videoUrl: SafeResourceUrl;
  @Input() page;
  @Input() autoplay: boolean = false;
  @Input() autoplayOptions?: { runOnce?: boolean };

  constructor(
    private sanitizer: DomSanitizer,
    private featuredVideoService: FeaturedVideoService
  ) {}

  ngOnInit(): void {
    this.featuredVideoService.getFeaturedVideo().subscribe((videoURL) => {
      this.videoUrl = videoURL;
    });
    console.log('THIS VIDEOURL', this.videoUrl);
    // this.videoUrl = this.featuredVideoService.getFeaturedVideo();
    this.featuredVideoService.autoplay = this.autoplay;
    this.featuredVideoService.autoplayOptions = this.autoplayOptions;
  }
  ngOnChanges(): void {}
}
