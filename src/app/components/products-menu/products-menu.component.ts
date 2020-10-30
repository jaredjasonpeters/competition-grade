import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-products-menu',
  templateUrl: './products-menu.component.html',
  styleUrls: ['./products-menu.component.css'],
  encapsulation: ViewEncapsulation.None
 
})
export class ProductsMenuComponent implements OnInit {

  constructor() { }
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  ngOnInit(): void {
  }

  openMenu() {
    this.trigger.openMenu();
    // alert('opening menu');
  }

}
