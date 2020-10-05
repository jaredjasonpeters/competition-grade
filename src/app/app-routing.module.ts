import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/products/product/product.component';
import { SeriesComponent } from './pages/products/series/series.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: ':name', component: SeriesComponent },
      { path: ':name/:id', component: ProductComponent },
    ],
  },

  { path: '**', component: HelloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {}
}
