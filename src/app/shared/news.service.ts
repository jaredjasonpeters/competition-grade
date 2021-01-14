import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { newsConfig } from '../configurations/news.config';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  currentNews: string = newsConfig.message;
  showNews: BehaviorSubject<boolean> = new BehaviorSubject(newsConfig.show);
  constructor() {}

  getCurrentNews() {
    if (this.showNews.getValue()) {
      return this.currentNews;
    } else {
      return false;
    }
  }

  disregardNews() {
    this.showNews.next(false);
    console.log('SHOW NEWS', this.showNews.getValue());
  }
}
