import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

import { ThanksComponent } from './pages/thanks/thanks.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MarketingComponent } from './pages/marketing/marketing.component';

import { SeriesComponent } from './pages/products/series/series.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DistributorAdvertComponent } from './pages/distributor/distributor-advert/distributor-advert.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DistributorLevelsComponent } from './pages/distributor/distributor-levels/distributor-levels.component';
import { DistributorBenefitsComponent } from './pages/distributor/distributor-benefits/distributor-benefits.component';
import { DistributorLocateComponent } from './pages/distributor/distributor-locate/distributor-locate.component';

import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { AuthGuard } from './shared/auth.guard';
import { CanDeactivateAdvGuard } from './shared/adv.guard';
import { SiteDetailsComponent } from './pages/site-details/site-details.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { ProjectDetailComponent } from './pages/projects/project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'products/:series',
    component: SeriesComponent
  },
  {
    path: 'adv',
    children: [
      {
        path: ':distributor',
        component: DistributorAdvertComponent,
        canDeactivate: [CanDeactivateAdvGuard]
      }
    ]
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'why-competition-grade',
    loadChildren: () =>
      import('./pages/why-comp-grade/why-comp-grade.module').then(
        m => m.WhyCompGradeModule
      )
  },
  {
    path: 'verification',
    loadChildren: () =>
      import('./pages/verification-program/verification.module').then(
        m => m.VerificationModule
      )
  },
  {
    path: 'distributor',
    children: [
      { path: 'levels', component: DistributorLevelsComponent },
      { path: 'benefits', component: DistributorBenefitsComponent },
      { path: 'locate', component: UnderConstructionComponent }
    ]
  },
  {
    path: 'projects',
    children: [
      { path: '', component: ProjectsComponent },
      { path: ':id', component: ProjectDetailComponent }
    ]
    // component: UnderConstructionComponent,
  },
  {
    path: 'site-details',
    component: SiteDetailsComponent
  },
  {
    path: 'portal',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'marketing',
        children: [{ path: ':id', component: MarketingComponent }]
      }
    ]
  },

  {
    path: 'featured',
    children: [{ path: ':product', component: FeaturedComponent }]
  },
  { path: 'thanks', component: ThanksComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 75]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {}
}
