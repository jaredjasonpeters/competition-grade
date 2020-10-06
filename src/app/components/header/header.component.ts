import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  disableProducts: boolean;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.productSelectedEvent.subscribe((bool) => {
      this.disableProducts = bool;
    });
  }

  ngOnDestroy(): void {}
}
