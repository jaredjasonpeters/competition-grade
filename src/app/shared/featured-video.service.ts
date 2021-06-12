import { ThrowStmt } from '@angular/compiler';
import { Injectable, Input, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeaturedVideoService implements OnDestroy {
  pageVidMap: { [key: string]: string } = {
    default: 'https://player.vimeo.com/video/491310373',
    speed: 'https://player.vimeo.com/video/500115420',
    power: 'https://player.vimeo.com/video/500115189',
    agility: 'https://player.vimeo.com/video/500192921'
  };

  private featuredVideo: BehaviorSubject<SafeResourceUrl> = new BehaviorSubject(
   this.pageVidMap.default
  );

  featuredVideo$ = this.featuredVideo.asObservable()
  requestedVideo: string = this.pageVidMap.default;
  hasPlayed = {};

  constructor(private sanitize: DomSanitizer, private router: Router) {}

  private sanitizeUrl(url): SafeResourceUrl {
    return this.sanitize.bypassSecurityTrustResourceUrl(url);
  }

  setVideoByPage(page): string {
    let url = this.pageVidMap[page] || this.pageVidMap.default;
    return url
  }

  getFeaturedVideo(options: {
    autoplay?: boolean;
    runOnce?: boolean;
  }, page):void {
    let finalUrl: SafeResourceUrl;
    let url = this.setVideoByPage(page);
    let paramsString: string;

    if (options?.autoplay === true) {
     paramsString = this.getParams([{ key: 'autoplay', value: 1 }]);
    } 

    if (options?.autoplay === false) {
      paramsString = ''
    }

    if (options?.runOnce === true) {
      if (this.hasPlayed[url]) {
        finalUrl = this.sanitizeUrl(url);
      } else {
        this.hasPlayed[url] = true;
        finalUrl = this.sanitizeUrl(url + paramsString);
      }
    } else {
      finalUrl = this.sanitizeUrl(url + paramsString);
    }
    this.featuredVideo.next(finalUrl);
  }

  getParams(params) {
    if (params.length === 0) {
      return;
    }
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
