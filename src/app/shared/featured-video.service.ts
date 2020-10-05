import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class FeaturedVideoService {
  videoUrls = [
    'https://www.youtube.com/embed/41IoDigg72A',
    'https://www.youtube.com/embed/OmNwBlr0Kkk',
    'https://www.youtube.com/embed/q9OzwKGmEmE',
    'https://www.youtube.com/embed/kvgCamY3dtY',
    'https://www.youtube.com/embed/X23afHWVj_Q',
  ];

  constructor(private sanitize: DomSanitizer) {}

  sanitizeUrl(url): SafeResourceUrl {
    return this.sanitize.bypassSecurityTrustResourceUrl(url);
  }

  getFirstFeatured(): SafeResourceUrl {
    const firstFeatured = this.videoUrls[0];
    return this.sanitizeUrl(firstFeatured);
  }

  getRandomVideo(): SafeResourceUrl {
    const randomIndex = Math.floor(Math.random() * this.videoUrls.length);
    const random = this.videoUrls[randomIndex];
    return this.sanitizeUrl(random);
  }
}
