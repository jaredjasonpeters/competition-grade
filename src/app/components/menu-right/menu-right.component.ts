import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { FeaturedVideoService } from 'src/app/shared/featured-video.service';

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.css'],
})
export class MenuRightComponent implements OnInit, OnChanges {
  
  constructor(private renderer: Renderer2, private featuredVideoService: FeaturedVideoService) {}
  @Input('page') seriesName;
  @ViewChild('menu', {static: true}) menu: ElementRef;


  ngOnInit(): void {
    console.log('MENU', this.menu);
    console.log('SERIESNAME', this.seriesName)
  
    if(this.seriesName) {
      this.renderer.setStyle(this.menu.nativeElement, 'background', `var(--cg_${this.seriesName})`);
      this.featuredVideoService.getVideoBySeries(this.seriesName);
    }
    else {
      this.featuredVideoService.getRandomVideo();
    }
  }

  ngOnChanges():void {
    if(this.seriesName) {
      this.renderer.setStyle(this.menu.nativeElement, 'background', `var(--cg_${this.seriesName})`);
      this.featuredVideoService.getVideoBySeries(this.seriesName);
    }
    else {
      
    }
  }
}
