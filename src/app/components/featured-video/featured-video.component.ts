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

  constructor(
    private sanitizer: DomSanitizer,
    private featuredVideoService: FeaturedVideoService
  ) {}

  ngOnInit(): void {
    this.videoUrl = this.featuredVideoService.getFeaturedVideo();
   
  }
  ngOnChanges(): void {
    this.videoUrl = this.featuredVideoService.getFeaturedVideo();
  }
}
