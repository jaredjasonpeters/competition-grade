import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { Subscription } from 'rxjs';

import { FeaturedProductService } from './featured-product.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
})
export class FeaturedComponent implements OnInit, OnDestroy {
  product: {
    name: string;
    description: string;
    images?: string[];
    techsheet?: string;
    video?: string;
  };
  needsPageHeader: boolean = true;
  pageHeaderTitle: string;

  productParamSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private featuredService: FeaturedProductService
  ) {
    this.productParamSubscription = this.route.params.subscribe((params) => {
      let product = this.featuredService.getProduct(params.product);
      if (product) {
        this.product = product;
        this.pageHeaderTitle = `ADVANCING THE GAME >> ${this.product.name}`;
      } else {
        this.router.navigate(['/not-found']);
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.productParamSubscription.unsubscribe();
  }
}
