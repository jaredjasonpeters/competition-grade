import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { Subscription } from 'rxjs';

import { FeaturedProductService } from './featured-product.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit, OnDestroy {
  @ViewChild('vidContainer', { static: true }) vidContainer: ElementRef<
    HTMLDivElement
  >;

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
    private featuredService: FeaturedProductService,
    private renderer: Renderer2
  ) {
    this.productParamSubscription = this.route.params.subscribe(params => {
      let product = this.featuredService.getByProductName(params.product);
      if (product) {
        this.product = product;
        console.log('THIS PRODUCT IMAGES', product);
        this.pageHeaderTitle = `ADVANCING THE GAME >> ${this.product.name}`;
      } else {
        this.router.navigate(['/not-found']);
      }
    });
  }

  ngOnInit(): void {
    this.renderer.setStyle(
      this.vidContainer.nativeElement,
      'background-image',
      `url(${this.product.images[0]})`
    );
  }

  ngOnDestroy(): void {
    this.productParamSubscription.unsubscribe();
  }
}
