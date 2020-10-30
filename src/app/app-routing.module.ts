import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/products/product/product.component';
import { SeriesComponent } from './pages/products/series/series.component';
import { DistributorAdvertComponent } from './components/distributors/distributor-advert/distributor-advert.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'products/:series',
    component: SeriesComponent,
    children: [
      { path: ':id', component: ProductComponent },
    ],
  },
  {
    path: 'adv',
    children: [
      {path: ':distributor', component: DistributorAdvertComponent},
    ]
  },
  { path: 'not-found', component: HelloComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() { }
}
