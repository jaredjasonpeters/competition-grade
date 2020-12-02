import { Component, ComponentRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DistributorAdvertComponent } from './pages/distributor/distributor-advert/distributor-advert.component';
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
  isAdvertisment: boolean;

  constructor(
    private newsService: NewsService,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.newsAvailable = this.newsService.getCurrentNews();
    this.authService.autoLogin();
  }

  onRouterActivate(event: ComponentRef<any>) {
    console.log('ROUTER ACTIVATE', event);
    if (event instanceof DistributorAdvertComponent) {
      this.isAdvertisment = true;
    } else {
      this.isAdvertisment = false;
    }
  }
}
