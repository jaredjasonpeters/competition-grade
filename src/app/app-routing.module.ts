import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsComponent } from './pages/products/products.component';
import { ThanksComponent } from './pages/thanks/thanks.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MarketingComponent } from './pages/marketing/marketing.component';
import { ProductComponent } from './pages/products/product/product.component';
import { SeriesComponent } from './pages/products/series/series.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DistributorAdvertComponent } from './pages/distributor/distributor-advert/distributor-advert.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DistributorLevelsComponent } from './pages/distributor/distributor-levels/distributor-levels.component';
import { DistributorBenefitsComponent } from './pages/distributor/distributor-benefits/distributor-benefits.component';
import { DistributorLocateComponent } from './pages/distributor/distributor-locate/distributor-locate.component';
import { WhyCompGradeComponent } from './pages/why-comp-grade/why-comp-grade.component';
import { VerificationProgramComponent } from './pages/verification-program/verification-program.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { AuthGuard } from './shared/auth.guard';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'products/:series',
    component: SeriesComponent,
    children: [{ path: ':id', component: ProductComponent }],
  },
  {
    path: 'adv',
    children: [{ path: ':distributor', component: DistributorAdvertComponent }],
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'why-competition-grade',
    component: WhyCompGradeComponent,
  },
  {
    path: 'verification',
    component: VerificationProgramComponent,
  },
  {
    path: 'distributor',
    children: [
      { path: 'levels', component: DistributorLevelsComponent },
      { path: 'benefits-and-rewards', component: DistributorBenefitsComponent },
      { path: 'locate', component: UnderConstructionComponent },
    ],
  },
  {
    path: 'projects',
    component: UnderConstructionComponent,
  },
  {
    path: 'portal',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'marketing',
        children: [{ path: ':id', component: MarketingComponent }],
      },
    ],
  },

  // { path: 'privacy', component: ThanksComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
