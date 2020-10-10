import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { SeriesFormulationService } from '../../../../../shared/series-formulation.service';

@Component({
  selector: 'app-formulation-graphic',
  templateUrl: './formulation-graphic.component.html',
  styleUrls: ['./formulation-graphic.component.css'],
})
export class FormulationGraphicComponent implements OnInit {
  @ViewChild('Primary', { static: true }) primary: ElementRef;
  @ViewChild('Secondary', { static: true }) secondary: ElementRef;
  @ViewChild('bag_clip', { static: true }) bagClip: ElementRef;

  fourTurfPercentage = 10;
  primaryPercentage = 70;
  seriesColor = 'speed';
  animationStatus = 'paused';

  constructor(
    private seriesFormulationService: SeriesFormulationService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    console.log('REF', this.primary, this.secondary, this.bagClip);
    this.seriesFormulationService.startAnimationSubject.subscribe((bool) => {
      this.animationStatus = 'running';
      this.seriesColor = 'power';
      this.renderer.addClass(this.primary.nativeElement, 'running');
      this.renderer.addClass(this.secondary.nativeElement, 'running');
      this.renderer.addClass(this.bagClip.nativeElement, 'running');
      this.renderer.addClass(this.primary.nativeElement, 'showPrimary80');
      this.renderer.addClass(this.secondary.nativeElement, 'showFourTurf10');
      this.renderer.addClass(this.bagClip.nativeElement, 'fadeBagArtwork');
    });
  }
}
