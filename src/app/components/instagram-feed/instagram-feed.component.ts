import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { first, take } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.css']
})
export class InstagramFeedComponent implements OnInit, OnChanges, OnDestroy {
  appId = environment.appId;
  appSecret = environment.appSecret;
  imagesToShow: string[] = [];
  postsToFetch: string[] = ['CKAWF3usXj4', 'CKAWNXgI6sq', 'CKAWJAZrKP_'];
  imageCycleInterval;
  cycleTiming: number = 10000;
  imageUrl: string;

  @ViewChild('root', { static: true }) root: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(
        `https://graph.facebook.com/oauth/access_token?client_id=${
          this.appId
        }&client_secret=${this.appSecret}&grant_type=client_credentials`
      )
      .subscribe((data: any) => {
        let accessToken = data.access_token;
        this.postsToFetch.forEach((post, i) => {
          this.fetchPost(post, accessToken, i);
        });
      });
    this.cycleImages();
  }

  ngOnChanges(): void {}

  ngOnDestroy(): void {
    clearTimeout(this.imageCycleInterval);
  }

  fetchPost(url, accessToken, i) {
    this.http
      .get(
        `https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/${url}/&access_token=${accessToken}`
      )
      .pipe(first())
      .subscribe((post: any) => {
        if (i === 0) {
          this.imageUrl = post.thumbnail_url;
        }
        this.imagesToShow.push(post.thumbnail_url);
      });
  }

  cycleImages() {
    let i = 1;

    this.imageCycleInterval = setInterval(() => {
      this.imageUrl = this.imagesToShow[i % this.imagesToShow.length];
      i++;
    }, this.cycleTiming);
  }

  handleClick() {
    window.open('https://instagram.com/compgradeseed', '_blank', 'no-referrer');
  }
}
