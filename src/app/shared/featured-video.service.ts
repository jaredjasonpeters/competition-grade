import { TagContentType } from '@angular/compiler';
import { Injectable, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FeaturedVideoService {
  private featuredVideo: SafeResourceUrl;
  private params: { key: string; value: string }[];
  private _autoplay = new Subject<boolean>();
  private _autoplayOptions = new BehaviorSubject<{ runOnce?: boolean }>({
    runOnce: false,
  });
  private runOnce: boolean;

  pageVidMap: { [key: string]: string } = {
    home: 'https://player.vimeo.com/video/483752615',
  };

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

  constructor(private sanitize: DomSanitizer, private router: Router) {
    this.constructParams();
    this._autoplayOptions.subscribe((options) => {
      if (options.runOnce) {
        this.runOnce = true;
      }
    });
  }

  sanitizeUrl(url, params?: { key: string; value: string }[]): SafeResourceUrl {
    let finalUrl = url;
    if (params) {
      const queryString = params
        .map((param, i) => {
          if (i === 0) {
            return `?${param.key}=${param.value}`;
          }
          return `&${param.key}=${param.value}`;
        })
        .join('');
      finalUrl = url + queryString;
    }
    return this.sanitize.bypassSecurityTrustResourceUrl(finalUrl);
  }

  setFirstFeatured(): void {
    console.log('SETTING FIRST FEATURED');
    const firstFeatured = this.videoUrls[0];
    if (this.runOnce) {
      this.featuredVideo = this.sanitizeUrl(firstFeatured);
    } else {
      this.featuredVideo = this.sanitizeUrl(firstFeatured, this.params);
    }
  }

  setRandomVideo(): void {
    console.log('SETTING RANDOM VIDEO');
    const randomIndex = Math.floor(Math.random() * this.videoUrls.length);
    const random = this.videoUrls[randomIndex];
    this.featuredVideo = this.sanitizeUrl(random, this.params);
  }

  setVideoBySeries(seriesName): void {
    const url = this.seriesVideos[seriesName];
    if (this.runOnce) {
      this.featuredVideo = this.sanitizeUrl(url);
    } else {
      this.featuredVideo = this.sanitizeUrl(url, this.params);
    }
  }

  setVideoByPage(page): void {
    console.log('PAGE', page);
    let url;
    if (page === '') {
      url = this.pageVidMap.home;
    } else {
      url = this.pageVidMap[page];
    }
    // this.setRandomVideo();
    if (this.runOnce) {
      this.featuredVideo = this.sanitizeUrl(url);
    } else {
      this.featuredVideo = this.sanitizeUrl(url, this.params);
    }
  }

  getFeaturedVideo(): SafeResourceUrl {
    console.log('GETTING FEATURED VIDEO');
    return this.featuredVideo;
  }

  public set autoplay(value: boolean) {
    this._autoplay.next(value);
  }

  public set autoplayOptions(options: {}) {
    this._autoplayOptions.next(options);
  }

  constructParams(): void {
    const params = [];
    if (this._autoplay) {
      params.push({ key: 'autoplay', value: '1' });
      params.push({ key: 'taco', value: 'bell' });
      params.push({ key: 'beer', value: 'ipa' });
    }
    this.params = params;
  }
}
