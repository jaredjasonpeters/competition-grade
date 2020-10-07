import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../shared/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  selected: boolean = false;
  productsSubscription: Subscription;

  constructor(private productsService: ProductsService) {
    // this.productsService.setProductSelected(true);
    this.productsSubscription = this.productsService.productSelectedEvent.subscribe(
      (bool) => (this.selected = bool)
    );
  }

  ngOnInit(): void {
    console.log('INIT PRODUCTS');
    // this.onProductSelected();
  }

  onProductSelected(): void {
    console.log('ON PRODUCT SELECTED');
    this.productsService.setProductSelected(true);
    this.productsSubscription = this.productsService.productSelectedEvent.subscribe(
      (bool) => (this.selected = bool)
    );
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
}
