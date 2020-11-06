import { Component, ElementRef, OnChanges, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
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
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) { }
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @ViewChild('navigation', {static: true}) navigation: ElementRef;



  ngOnInit(): void {

    let nav = this.navigation.nativeElement
    let offset = nav.offsetTop;

      this.renderer.listen(window, 'scroll', () => {  
      if(window.pageYOffset <= offset) {
        this.renderer.removeClass(nav, 'sticky');
      } else {
        this.renderer.addClass(nav, 'sticky');
      }
    });
  }



 
}
