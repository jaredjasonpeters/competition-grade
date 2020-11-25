import { Injectable, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeaturedVideoService {
  private featuredVideo: SafeResourceUrl;
  private params: { key: string; value: string }[];
  private _autoplay = new Subject<boolean>();

  pageVidMap: string[];
  videoUrls = [
    'https://player.vimeo.com/video/483752615',
    // 'https://www.youtube.com/embed/OmNwBlr0Kkk',
    // 'https://www.youtube.com/embed/q9OzwKGmEmE',
    // 'https://www.youtube.com/embed/kvgCamY3dtY',
    // 'https://www.youtube.com/embed/X23afHWVj_Q',
  ];

  seriesVideos = {
    speed: 'https://www.youtube.com/embed/1cNBL3OOMRY',
    power: 'https://www.youtube.com/embed/L53gjP-TtGE',
    agility: 'https://www.youtube.com/embed/TKrwnoa-hMI',
  };

  constructor(private sanitize: DomSanitizer) {
    this.constructParams();
    console.log('PARAMS', this.params);
  }

  sanitizeUrl(url, params?: { key: string; value: string }[]): SafeResourceUrl {
    let finalUrl = url;
    if (params) {
      let queryString = params
        .map((param, i) => {
          if (i === 0) {
            return `?${param.key}=${param.value}`;
          }
          return `&${param.key}=${param.value}`;
        })
        .join('');
      finalUrl = url + queryString;
      console.log('FINAL URL', finalUrl);
    }
    return this.sanitize.bypassSecurityTrustResourceUrl(finalUrl);
  }

  getFirstFeatured(): SafeResourceUrl {
    const firstFeatured = this.videoUrls[0];
    this.featuredVideo = this.sanitizeUrl(firstFeatured, this.params);
    return this.getFeaturedVideo();
  }

  getRandomVideo(): SafeResourceUrl {
    const randomIndex = Math.floor(Math.random() * this.videoUrls.length);
    const random = this.videoUrls[randomIndex];
    this.featuredVideo = this.sanitizeUrl(random, this.params);
    return this.getFeaturedVideo();
  }

  getVideoBySeries(seriesName): SafeResourceUrl {
    let url = this.seriesVideos[seriesName];
    this.featuredVideo = this.sanitizeUrl(url, this.params);

    return this.getFeaturedVideo();
  }

  getVideoByPage(page): SafeResourceUrl {
    // let url = this.pageVidMap[page]
    return this.getRandomVideo();
  }

  getFeaturedVideo() {
    return this.featuredVideo;
  }

  public set autoplay(value: boolean) {
    this._autoplay.next(value);
  }

  constructParams(): void {
    const params = [];
    if (this._autoplay) {
      params.push({ key: 'autoplay', value: '1' });
    }
    this.params = params;
  }
}
