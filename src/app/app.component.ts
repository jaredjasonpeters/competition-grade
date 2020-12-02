import { Component, OnInit } from '@angular/core';
import { TransitionCheckState } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { NewsService } from './shared/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'competition-grade';
  newsAvailable: string;

  constructor(
    private newsService: NewsService,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.newsAvailable = this.newsService.getCurrentNews();
    this.authService.autoLogin();
  }
}
