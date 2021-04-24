import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { first, pluck, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.css']
})
export class InstagramFeedComponent implements OnInit, OnChanges, OnDestroy {
  imagesToShow: string[] = [];
  imageCycleInterval;
  cycleTiming: number = 10000;
  imageUrl: string;

  @ViewChild('root', { static: true }) root: ElementRef;
  @ViewChild('instagramContainer', { static: true }) ig: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(
        `https://graph.instagram.com/me/media?fields=media_url&access_token=${
          environment.userToken
        }`
      )
      .pipe(
        first(),
        pluck('data'),
        tap((data: [{ media_url: string }]) => {
          const urls = data.map(data => data.media_url);
          this.imagesToShow = urls;
          this.imageUrl = urls[0];
          this.cycleImages();
        })
      )
      .subscribe();
  }

  ngOnChanges(): void {}

  ngOnDestroy(): void {
    clearInterval(this.imageCycleInterval);
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
