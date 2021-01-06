import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';

import { FeaturedProductService } from './featured-product.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
})
export class FeaturedComponent implements OnInit, OnDestroy {
  product: { name: string; description: string; images?: string[] };
  productName: string;

  productParamSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private featuredService: FeaturedProductService
  ) {}

  ngOnInit(): void {
    this.productParamSubscription = this.route.params.subscribe((params) => {
      this.productName = params.product;
      this.product = this.featuredService.getProduct(params.product);
    });

    console.log('PRODUCT', this.product);
  }

  ngOnDestroy(): void {
    this.productParamSubscription.unsubscribe();
  }
}
