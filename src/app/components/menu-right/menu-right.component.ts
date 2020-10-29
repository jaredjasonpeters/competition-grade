import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.css'],
})
export class MenuRightComponent implements OnInit {
  @Input('page') page;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log('SERIESNAME', this.page)
    // this.renderer.setStyle();
  }
}
