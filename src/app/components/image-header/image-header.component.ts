import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-header',
  templateUrl: './image-header.component.html',
  styleUrls: ['./image-header.component.css']
})
export class ImageHeaderComponent implements OnInit {
  @Input()image: String;
  @Input()backgroundImage: String;
  @Input()backgroundImageStyles: {
    size?: String,
    positionX?: Number,
    positionY?: Number
  }
  @ViewChild('imageContainer', {static: true})imageContainer: ElementRef<any>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
   let el = this.imageContainer.nativeElement;
   this.renderer.setStyle(el, 'background-image', `url(${this.backgroundImage})`);
   if(this.backgroundImageStyles.size !== '') {
     console.log('BS', this.backgroundImageStyles.size)
     this.renderer.setStyle(el, 'background-size', this.backgroundImageStyles.size);
   }
   if(this.backgroundImageStyles.positionY) {
     this.renderer.setStyle(el, 'background-position-y', `${this.backgroundImageStyles.positionY}px` )
   }
 }

}
