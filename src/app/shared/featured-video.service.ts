import { ThrowStmt } from '@angular/compiler';
import { Injectable, Input, OnDestroy } from '@angular/core';
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
  requestedVideo: string;
  hasPlayed = {};

  pageVidMap: { [key: string]: string } = {
    default: 'https://player.vimeo.com/video/491310373',
  };

  seriesVideos = {
    speed: 'https://player.vimeo.com/video/499727006',
    power: 'https://player.vimeo.com/video/499731563',
    agility: 'https://player.vimeo.com/video/499718190',
  };

  constructor(private sanitize: DomSanitizer, private router: Router) {}

  private setRequestedVideo(url: string): void {
    this.requestedVideo = url;
  }

  private sanitizeUrl(url): SafeResourceUrl {
    return this.sanitize.bypassSecurityTrustResourceUrl(url);
  }

  setVideoBySeries(seriesName): void {
    const url = this.seriesVideos[seriesName];
    this.setRequestedVideo(url);
  }

  setVideoByPage(page): void {
    let url = this.pageVidMap[page] || this.pageVidMap.default;
    this.setRequestedVideo(url);
  }

  getFeaturedVideo(options: {
    autoplay?: boolean;
    runOnce?: boolean;
  }): Subject<SafeResourceUrl> {
    let finalUrl: SafeResourceUrl;
    let url = this.requestedVideo;
    let params: { key: string; value: any }[] = [];
    if (options && options.autoplay) {
      params = this.getParams([{ key: 'autoplay', value: 1 }]);
    }

    if (options && options.runOnce) {
      if (this.hasPlayed[url]) {
        finalUrl = this.sanitizeUrl(url);
      } else {
        this.hasPlayed[url] = true;
        finalUrl = this.sanitizeUrl(url + params);
      }
    }
    this.featuredVideo.next(finalUrl);
    return this.featuredVideo;
  }

  getParams(params) {
    const queryString = params
      .map((param, i) => {
        if (i === 0) {
          return `?${param.key}=${param.value}`;
        }
        return `&${param.key}=${param.value}`;
      })
      .join('');
    return queryString;
  }

  ngOnDestroy(): void {}
}
