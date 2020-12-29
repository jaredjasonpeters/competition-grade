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
    default: 'https://player.vimeo.com/video/491310373',
  };

  seriesVideos = {
    speed: 'https://player.vimeo.com/video/486552902',
    power: 'https://player.vimeo.com/video/486555331',
    agility: 'https://player.vimeo.com/video/486558170',
  };

  constructor(private sanitize: DomSanitizer, private router: Router) {
    this.constructParams();
    this.autoplayOptionsSub = this._autoplayOptions.subscribe((options) => {
      this.runOnce = options.runOnce;
    });
  }

  private constructParams(): void {
    const params = [];
    if (this._autoplay) {
      params.push({ key: 'autoplay', value: '1' });
    }
    this.params = params;
  }

  private setCorrectVideo(url): void {
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

  private sanitizeUrl(
    url,
    params?: { key: string; value: string }[]
  ): SafeResourceUrl {
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
    return this.sanitize.bypassSecurityTrustResourceUrl(finalUrl);
  }

  public set autoplay(value: boolean) {
    this._autoplay.next(value);
  }

  public set autoplayOptions(options: {}) {
    this._autoplayOptions.next(options);
  }

  setVideoBySeries(seriesName): void {
    const url = this.seriesVideos[seriesName];
    this.setCorrectVideo(url);
  }

  setVideoByPage(page): void {
    let url = this.pageVidMap[page] || this.pageVidMap.default;
    this.setCorrectVideo(url);
  }

  getFeaturedVideo(): Subject<SafeResourceUrl> {
    return this.featuredVideo;
  }

  ngOnDestroy(): void {
    this.autoplayOptionsSub.unsubscribe();
  }
}
