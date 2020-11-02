import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { InstagramFeedComponent } from './components/instagram-feed/instagram-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterDetailComponent } from './components/footer-detail/footer-detail.component';
import { MenuRightComponent } from './components/menu-right/menu-right.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { FeaturedLinksComponent } from './components/featured-links/featured-links.component';
import { TwitterFeedComponent } from './components/twitter-feed/twitter-feed.component';
import { FeaturedVideoComponent } from './components/featured-video/featured-video.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/products/product/product.component';
import { SeriesComponent } from './pages/products/series/series.component';
import { DistributorsComponent } from './components/distributors/distributors.component';
import { DistributorAdvertComponent } from './components/distributors/distributor-advert/distributor-advert.component';
import { FooterListComponent } from './components/footer-list/footer-list.component';
import { FormulationComponent } from './pages/products/series/formulation/formulation.component';
import { FormulationGraphicComponent } from './pages/products/series/formulation/formulation-graphic/formulation-graphic.component';
import { FormulationBreakdownComponent } from './pages/products/series/formulation/formulation-breakdown/formulation-breakdown.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductsMenuComponent } from './components/products-menu/products-menu.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DistributorLevelsComponent } from './pages/distributor/distributor-levels/distributor-levels.component';
import { DistributorBenefitsComponent } from './pages/distributor/distributor-benefits/distributor-benefits.component';
import { VerificationProgramComponent } from './pages/verification-program/verification-program.component';
import { WhyCompGradeComponent } from './pages/why-comp-grade/why-comp-grade.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { DistributorLocateComponent } from './pages/distributor/distributor-locate/distributor-locate.component';
import { MarketingComponent } from './pages/marketing/marketing.component';


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
    TwitterFeedComponent,
    FeaturedVideoComponent,
    ProductsComponent,
    ProductComponent,
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
    VerificationProgramComponent,
    WhyCompGradeComponent,
    ProjectsComponent,
    DistributorLocateComponent,
    MarketingComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [
    Title,
    {
      provide: Window,
      useValue: window,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
