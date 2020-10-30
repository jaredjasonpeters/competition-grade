import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.css'],
})
export class MenuRightComponent implements OnInit, OnChanges {
  
  constructor(private renderer: Renderer2) {}
  @Input('page') page;
  @ViewChild('menu', {static: true}) menu: ElementRef;

  ngOnInit(): void {
    console.log('MENU', this.menu);
    console.log('SERIESNAME', this.page)
    if(this.page) {
      this.renderer.setStyle(this.menu.nativeElement, 'background', `var(--cg_${this.page})`);
    }
  }

  ngOnChanges():void {
    if(this.page) {
      this.renderer.setStyle(this.menu.nativeElement, 'background', `var(--cg_${this.page})`);
    }
  }
}
