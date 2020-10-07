import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-featured-links',
  templateUrl: './featured-links.component.html',
  styleUrls: ['./featured-links.component.css'],
})
export class FeaturedLinksComponent implements OnInit {
  links = [
    {
      title: 'speed',
      imagePath: '../../../assets/speed_series.png',
    },
    {
      title: 'power',
      imagePath: '../../../assets/power_series.png',
    },
    {
      title: 'agility',
      imagePath: '../../../assets/agility_series.png',
    },
  ];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onProductSelected(title): void {
    console.log('SELECTED FEATURE');
    this.productsService.setProductSelected(true);
    this.router.navigate(['/products', title]);

    // [routerLink] = "['/products', link.title]"

    // this.productsService.productSelectedEvent.subscribe(
    //   (bool) => (this.selected = bool)
    // );
  }
}
