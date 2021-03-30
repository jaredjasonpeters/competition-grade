import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { LayoutService } from 'src/app/shared/layout.service';

const widthMap = {
  mobile: '100%',
  tablet: '100%',
  desktop: '85%'
};

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit, OnChanges {
  @Input() size: string;
  @Input() topMargin: string;
  @ViewChild('container', { static: true }) container: ElementRef<
    HTMLDivElement
  >;
  constructor(
    private renderer: Renderer2,
    public layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.container.nativeElement,
      'width',
      this.mapSizeToWidth(widthMap, this.size)
    );
  }

  ngOnChanges(): void {
    this.renderer.setStyle(
      this.container.nativeElement,
      'width',
      this.mapSizeToWidth(widthMap, this.size)
    );
  }

  mapSizeToWidth(mapObj, size: string): string {
    return mapObj[size];
  }
}
