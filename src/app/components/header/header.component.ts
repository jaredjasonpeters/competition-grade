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
  ) { }

  ngOnInit(): void {

  }

  openMenu() {
    alert('opening menu');
  }
}
