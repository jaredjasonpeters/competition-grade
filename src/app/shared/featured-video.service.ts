import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class FeaturedVideoService {
  private featuredVideo: SafeResourceUrl;

  pageVidMap: string[];
  videoUrls = [
    'https://www.youtube.com/embed/41IoDigg72A',
    'https://www.youtube.com/embed/OmNwBlr0Kkk',
    'https://www.youtube.com/embed/q9OzwKGmEmE',
    'https://www.youtube.com/embed/kvgCamY3dtY',
    'https://www.youtube.com/embed/X23afHWVj_Q',
  ];

  seriesVideos = {
    speed: 'https://www.youtube.com/embed/1cNBL3OOMRY',
    power: 'https://www.youtube.com/embed/L53gjP-TtGE',
    agility: 'https://www.youtube.com/embed/TKrwnoa-hMI',
  }

  constructor(private sanitize: DomSanitizer) {}

  sanitizeUrl(url): SafeResourceUrl {
    return this.sanitize.bypassSecurityTrustResourceUrl(url);
  }

  getFirstFeatured(): SafeResourceUrl {
    const firstFeatured = this.videoUrls[0];
    this.featuredVideo = this.sanitizeUrl(firstFeatured);
    return this.getFeaturedVideo();
  }

  getRandomVideo(): SafeResourceUrl {
    const randomIndex = Math.floor(Math.random() * this.videoUrls.length);
    const random = this.videoUrls[randomIndex];
    this.featuredVideo = this.sanitizeUrl(random);
    return this.getFeaturedVideo();
  }

  getVideoBySeries(seriesName): SafeResourceUrl {
    let url = this.seriesVideos[seriesName];
    this.featuredVideo = this.sanitizeUrl(url)
   
    return this.getFeaturedVideo();
  }

  getVideoByPage(page): SafeResourceUrl{
    // let url = this.pageVidMap[page]
    return this.getRandomVideo();
  }

  getFeaturedVideo() {
    return this.featuredVideo
  }
}
