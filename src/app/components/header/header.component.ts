import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  disableProducts: boolean;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productsService.productSelectedEvent.subscribe((bool) => {
      this.disableProducts = bool;
      console.log('DISABLED PROD', this.disableProducts);
    });
    let last_url = '';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (
          last_url.match(/\/products\/(speed)?(power)?(agility)*/g) !== null &&
          event.url.match(/\/products\/(speed)?(power)?(agility)*/g) === null
        ) {
          this.disableProducts = false;
        }
        last_url = event.url;
      }
    });
  }
}
