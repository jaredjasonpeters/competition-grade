import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';


@Component({
  selector: 'app-featured-links',
  templateUrl: './featured-links.component.html',
  styleUrls: ['./featured-links.component.css'],
})
export class FeaturedLinksComponent implements OnInit, OnChanges {
  @Input() page;
  @Input() links: [];
  //  [
  //   {
  //     title: 'speed',
  //     imagePath: '../../../assets/speed_series.png',
  //   },
  //   {
  //     title: 'power',
  //     imagePath: '../../../assets/power_series.png',
  //   },
  //   {
  //     title: 'agility',
  //     imagePath: '../../../assets/agility_series.png',
  //   },
  // ];

  constructor(
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
  
    // this.renderer.setStyle(this.featuredTile.nativeElement, 'background', `var(--cg_${this.seriesName})`);
  
  }

  ngOnChanges(): void {
   
  }

  onProductSelected(title): void {
   
    this.router.navigate(['/products', title]);

  }
}
