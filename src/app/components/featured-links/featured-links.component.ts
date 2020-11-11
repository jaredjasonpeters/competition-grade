import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

import {Link, LinksProviderService} from '../../shared/links-provider.service';


@Component({
  selector: 'app-featured-links',
  templateUrl: './featured-links.component.html',
  styleUrls: ['./featured-links.component.css'],
})
export class FeaturedLinksComponent implements OnInit, OnChanges {
  @Input() page;
  @Input() links: Link[];


  constructor(
    private router: Router,
    private renderer: Renderer2,
    private linksProvider: LinksProviderService
  ) {}

  ngOnInit(): void {
  
    this.links = this.linksProvider.getLinksByPage(this.page);
  
  }

  ngOnChanges(): void {
   
  }

  onProductSelected(title): void {
   
    this.router.navigate(['/products', title]);

  }
}
