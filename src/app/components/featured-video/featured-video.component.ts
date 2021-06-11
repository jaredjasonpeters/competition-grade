import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/shared/layout.service';
import { FeaturedVideoService } from '../../shared/featured-video.service';

import Player from '@vimeo/player'

@Component({
  selector: 'app-featured-video',
  templateUrl: './featured-video.component.html',
  styleUrls: ['./featured-video.component.css']
})
export class FeaturedVideoComponent implements OnInit, OnChanges, AfterViewInit {
  videoUrl: SafeResourceUrl;
  getFeaturedVideoSub: Subscription;

 @ViewChild('video', {static: false}) video;

  @Input() page 
  @Input() autoplayOptions?: { autoplay?: boolean; runOnce?: boolean };

  constructor(
    public featuredVideoService: FeaturedVideoService,
    public layoutService: LayoutService
  ) {}

  ngOnInit(): void {
  
    
  }

  ngAfterViewInit() {
    const player = new Player(this.video.nativeElement)
    document.querySelector('iframe').click()
    document.querySelector('iframe').click()
  player.setVolume(0).then(() => {
 
    player.play()
  })
  }
  
  ngOnChanges(): void {
    this.featuredVideoService.getFeaturedVideo(this.autoplayOptions, this.page)
   
  }
}
