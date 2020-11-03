import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  currentNews: string
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.currentNews = this.newsService.getCurrentNews()
  }

}
