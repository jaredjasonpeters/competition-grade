import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { LayoutService } from 'src/app/shared/layout.service';

@Component({
  selector: 'app-formulation',
  templateUrl: './formulation.component.html',
  styleUrls: ['./formulation.component.css']
})
export class FormulationComponent implements OnInit, OnChanges {
  @ViewChild('informationCard', { static: true }) informationCard;

  @Input() seriesInfo: any;
  @Input() seriesName: any;

  constructor(
    private renderer: Renderer2,
    public layoutService: LayoutService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.renderer.setStyle(
      this.informationCard._element.nativeElement,
      'background-image',
      `url(/assets/${this.seriesName}_color_bg.jpg)`
    );
  }
}
