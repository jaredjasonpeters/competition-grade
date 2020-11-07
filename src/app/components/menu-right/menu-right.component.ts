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
  @Input() page;
  @ViewChild('menu', {static: true}) menu: ElementRef;


  ngOnInit(): void {
    console.log('PAGE', this.page);
   
  
    if(this.page === 'speed' || this.page === 'power' || this.page === 'agility') {
      this.renderer.setStyle(this.menu.nativeElement, 'background', `var(--cg_${this.page})`);
      this.featuredVideoService.getVideoBySeries(this.page);
    }
    else {
      this.featuredVideoService.getRandomVideo();
    }
  }

  ngOnChanges():void {
    if(this.page === 'speed' || this.page === 'power' || this.page === 'agility') {
      this.renderer.setStyle(this.menu.nativeElement, 'background', `var(--cg_${this.page})`);
      this.featuredVideoService.getVideoBySeries(this.page);
    }
    else {
      
    }
  }
}
