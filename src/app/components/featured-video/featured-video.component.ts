import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FeaturedVideoService } from '../../shared/featured-video.service';

@Component({
  selector: 'app-featured-video',
  templateUrl: './featured-video.component.html',
  styleUrls: ['./featured-video.component.css'],
})
export class FeaturedVideoComponent implements OnInit {
  videoUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private featuredVideoService: FeaturedVideoService
  ) {}

  ngOnInit(): void {
    this.videoUrl = this.featuredVideoService.getRandomVideo();
  }
}
