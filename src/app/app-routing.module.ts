import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/products/product/product.component';
import { SeriesComponent } from './pages/products/series/series.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DistributorAdvertComponent } from './components/distributors/distributor-advert/distributor-advert.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DistributorLevelsComponent } from './pages/distributor/distributor-levels/distributor-levels.component';
import { DistributorBenefitsComponent } from './pages/distributor/distributor-benefits/distributor-benefits.component';

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
    component: ContactUsComponent
  },
  {
    path: 'distributor',
    children: [
      {path: 'levels', component: DistributorLevelsComponent},
      {path: 'benefits-and-rewards', component: DistributorBenefitsComponent}
    ]
  },
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
