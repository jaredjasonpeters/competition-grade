import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material.module';
import { MatIconModule } from '@angular/material/icon';

import { BrowserModule, Title } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { InstagramFeedComponent } from './components/instagram-feed/instagram-feed.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterDetailComponent } from './components/footer-detail/footer-detail.component';
import { MenuRightComponent } from './components/menu-right/menu-right.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { FeaturedLinksComponent } from './components/featured-links/featured-links.component';
import { TwitterFeedComponent } from './components/twitter-feed/twitter-feed.component';
import { FeaturedVideoComponent } from './components/featured-video/featured-video.component';
import { SeriesComponent } from './pages/products/series/series.component';
import { DistributorsComponent } from './components/distributors/distributors.component';
import { DistributorAdvertComponent } from './pages/distributor/distributor-advert/distributor-advert.component';
import { FooterListComponent } from './components/footer-list/footer-list.component';
import { FormulationComponent } from './pages/products/series/formulation/formulation.component';
import { FormulationGraphicComponent } from './pages/products/series/formulation/formulation-graphic/formulation-graphic.component';
import { FormulationBreakdownComponent } from './pages/products/series/formulation/formulation-breakdown/formulation-breakdown.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsMenuComponent } from './components/products-menu/products-menu.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DistributorLevelsComponent } from './pages/distributor/distributor-levels/distributor-levels.component';
import { DistributorBenefitsComponent } from './pages/distributor/distributor-benefits/distributor-benefits.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DistributorLocateComponent } from './pages/distributor/distributor-locate/distributor-locate.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsComponent } from './components/news/news.component';
import { FormComponent } from './components/form/form.component';
import { ThanksComponent } from './pages/thanks/thanks.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptorService } from './shared/auth-interceptor.service';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectsSearchComponent } from './components/projects-search/projects-search.component';
import { SiteDetailsComponent } from './pages/site-details/site-details.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { SharedComponentsModule } from './components/shared-components/shared-components.module';
import { MobileNavComponent } from './components/mobile/mobile-nav/mobile-nav.component';
import { LayoutService } from './shared/layout.service';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    InstagramFeedComponent,
    FooterDetailComponent,
    MenuRightComponent,
    ImageSliderComponent,
    FeaturedLinksComponent,
    FeaturedVideoComponent,
    TwitterFeedComponent,
    FeaturedVideoComponent,
    SeriesComponent,
    DistributorsComponent,
    DistributorAdvertComponent,
    FooterListComponent,
    FormulationComponent,
    FormulationGraphicComponent,
    FormulationBreakdownComponent,
    DistributorAdvertComponent,
    NotFoundComponent,
    ProductsMenuComponent,
    ContactUsComponent,
    DistributorLevelsComponent,
    DistributorBenefitsComponent,
    ProjectsComponent,
    DistributorLocateComponent,
    MarketingComponent,
    NewsComponent,
    FormComponent,
    ThanksComponent,
    UnderConstructionComponent,
    LoginComponent,
    ProjectCardComponent,
    ProjectsSearchComponent,
    SiteDetailsComponent,
    PageHeaderComponent,
    FeaturedComponent,
    MobileNavComponent,
    ContentContainerComponent,
    FeaturedProjectsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MaterialModule,
    MatIconModule,
    HttpClientModule,
    SharedComponentsModule
  ],
  providers: [
    LayoutService,
    Title,
    {
      provide: Window,
      useValue: window
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
