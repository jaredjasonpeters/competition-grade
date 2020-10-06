import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  selected: boolean;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.setProductSelected(false);
    this.productsService.productSelectedEvent.subscribe(
      (bool) => (this.selected = bool)
    );
  }

  onProductSelected(): void {
    this.productsService.setProductSelected(true);
    this.productsService.productSelectedEvent.subscribe(
      (bool) => (this.selected = bool)
    );
  }
}
