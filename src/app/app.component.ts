import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  OnChanges,
  OnInit
} from '@angular/core';
import { DistributorAdvertComponent } from './pages/distributor/distributor-advert/distributor-advert.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AuthService } from './shared/auth.service';
import { LayoutService } from './shared/layout.service';
import { NewsService } from './shared/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, AfterContentChecked {
  title = 'competition-grade';
  isAdvertisment: boolean;
  displayPageHeader: boolean;
  pageHeaderTitle: string;

  constructor(
    private cdref: ChangeDetectorRef,
    public newsService: NewsService,
    private authService: AuthService,
    public layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  ngOnChanges(): void {}

  ngAfterContentChecked() {
    this.cdref.detectChanges();
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
