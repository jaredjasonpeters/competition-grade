import { Injectable, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FeaturedVideoService implements OnDestroy {
  private featuredVideo: BehaviorSubject<SafeResourceUrl> = new BehaviorSubject(
    ''
  );
  private params: { key: string; value: string }[];
  private _autoplay = new Subject<boolean>();
  private _autoplayOptions = new BehaviorSubject<{ runOnce?: boolean }>({
    runOnce: false,
  });
  private runOnce: boolean;
  autoplayOptionsSub: Subscription;

  hasPlayed = {};

  pageVidMap: { [key: string]: string } = {
    home: 'https://player.vimeo.com/video/483752615',
  };

  seriesVideos = {
    speed: 'https://player.vimeo.com/video/483749526',
    power: 'https://player.vimeo.com/video/483653196',
    agility: 'https://player.vimeo.com/video/483338079',
  };

  constructor(private sanitize: DomSanitizer, private router: Router) {
    this.constructParams();
    this.autoplayOptionsSub = this._autoplayOptions.subscribe((options) => {
      this.runOnce = options.runOnce;
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
    this.hasPlayed[url] = true;
    console.log('HAS PLAYED: ', this.hasPlayed, finalUrl);
    return this.sanitize.bypassSecurityTrustResourceUrl(finalUrl);
  }

  setRandomVideo(): void {
    console.log('SETTING RANDOM VIDEO');
    const randomIndex = Math.floor(Math.random() * this.videoUrls.length);
    const random = this.videoUrls[randomIndex];
    this.featuredVideo.next(this.sanitizeUrl(random, this.params));
  }

  setVideoBySeries(seriesName): void {
    const url = this.seriesVideos[seriesName];
    console.log('THIS HAS BY SERIES', this.hasPlayed[url]);
    if (this.runOnce) {
      if (this.hasPlayed[url]) {
        this.featuredVideo.next(this.sanitizeUrl(url));
      } else {
        this.featuredVideo.next(this.sanitizeUrl(url, this.params));
      }
    } else {
      this.featuredVideo.next(this.sanitizeUrl(url, this.params));
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
    console.log('THIS HAS', this.hasPlayed[url]);
    if (this.runOnce) {
      if (this.hasPlayed[url]) {
        this.featuredVideo.next(this.sanitizeUrl(url));
      } else {
        this.featuredVideo.next(this.sanitizeUrl(url, this.params));
      }
    } else {
      this.featuredVideo.next(this.sanitizeUrl(url, this.params));
    }
  }

  getFeaturedVideo(): Subject<SafeResourceUrl> {
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
    }
    this.params = params;
  }

  ngOnDestroy(): void {
    this.autoplayOptionsSub.unsubscribe();
  }
}
