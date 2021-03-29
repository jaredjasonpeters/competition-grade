import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-image-header',
  templateUrl: './image-header.component.html',
  styleUrls: ['./image-header.component.css']
})
export class ImageHeaderComponent implements OnInit {
  @Input() image: string;
  @Input() video: string;
  @Input() backgroundImage: string;
  @Input() backgroundImageStyles: {
    size?: string;
    positionX?: number;
    positionY?: number;
  };
  @ViewChild('imageContainer', { static: true })
  imageContainer: ElementRef<any>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    let el = this.imageContainer.nativeElement;
    this.renderer.setStyle(
      el,
      'background-image',
      `url(${this.backgroundImage})`
    );
  }
}
