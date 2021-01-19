import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ComponentRef, OnChanges, OnInit } from '@angular/core';
import { DistributorAdvertComponent } from './pages/distributor/distributor-advert/distributor-advert.component';
import { AuthService } from './shared/auth.service';
import { NewsService } from './shared/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'competition-grade';
  newsAvailable: boolean;
  isAdvertisment: boolean;
  showMobileNav: boolean;
  displayPageHeader: boolean;
  pageHeaderTitle: string;

  constructor(
    private newsService: NewsService,
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {}
  ngOnInit(): void {
    this.authService.autoLogin();
    this.newsService.showNews.subscribe((bool) => {
      this.newsAvailable = bool;
    });
  }

  ngOnChanges(): void {}

  getLayoutInfo(size: string) {
    if (size === 'small') {
      this.showMobileNav = true;
    } else {
      this.showMobileNav = false;
    }
  }

  onRouterActivate(event: ComponentRef<any>) {
    if (event instanceof DistributorAdvertComponent) {
      this.isAdvertisment = true;
    } else {
      this.isAdvertisment = false;
    }

    if (event.hasOwnProperty('needsPageHeader')) {
      this.displayPageHeader = event['needsPageHeader'];
      if (event.hasOwnProperty('pageHeaderTitle')) {
        this.pageHeaderTitle = event['pageHeaderTitle'];
        console.log('PHT', this.pageHeaderTitle);
      }
    } else {
      this.displayPageHeader = false;
      this.pageHeaderTitle = '';
    }
  }
}
