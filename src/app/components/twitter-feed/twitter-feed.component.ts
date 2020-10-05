import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';

declare var twttr;

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css'],
})
export class TwitterFeedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (twttr) {
      twttr.widgets.load();
    }
  }
}
