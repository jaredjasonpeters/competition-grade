import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
currentNews: string;
  constructor() { }

  getCurrentNews() {
    return this.currentNews
  }
}
