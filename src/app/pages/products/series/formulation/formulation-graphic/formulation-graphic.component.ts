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

  fourTurfPercentage: number;
  primaryPercentage: number;
  seriesColor: string;
  animationStatus: string;

  constructor(
    private seriesFormulationService: SeriesFormulationService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    console.log('REF', this.primary, this.secondary, this.bagClip);
    this.seriesFormulationService.formulationSubject.subscribe(
      ({ seriesName, formula }) => {
        this.renderer.removeClass(this.bagClip.nativeElement, 'hideBag');
        this.renderer.removeClass(
          this.primary.nativeElement,
          `remainPrimary${this.primaryPercentage}`
        );
        this.renderer.removeClass(
          this.secondary.nativeElement,
          `remainFourTurf${this.fourTurfPercentage}`
        );

        this.seriesColor = seriesName;
        this.renderer.addClass(this.primary.nativeElement, 'running');
        this.renderer.addClass(this.secondary.nativeElement, 'running');
        this.renderer.addClass(this.bagClip.nativeElement, 'running');
        this.animationStatus = 'running';

        this.renderer.addClass(
          this.primary.nativeElement,
          `showPrimary${formula.primary.percentage}`
        );
        this.primaryPercentage = formula.primary.percentage;

        this.renderer.addClass(
          this.secondary.nativeElement,
          `showFourTurf${formula.fourTurf.percentage}`
        );
        this.fourTurfPercentage = formula.fourTurf.percentage;

        this.renderer.addClass(this.bagClip.nativeElement, 'fadeBagArtwork');

        //listen for on animation end to remove classes //

        this.renderer.listen(this.bagClip.nativeElement, 'animationend', () => {
          // alert('ANIMATION ENDED');
          this.renderer.removeClass(
            this.bagClip.nativeElement,
            'fadeBagArtwork'
          );
          this.renderer.addClass(this.bagClip.nativeElement, 'hideBag');
        });

        this.renderer.listen(this.primary.nativeElement, 'animationend', () => {
          this.renderer.removeClass(
            this.primary.nativeElement,
            `showPrimary${formula.primary.percentage}`
          );
          this.renderer.addClass(
            this.primary.nativeElement,
            `remainPrimary${formula.primary.percentage}`
          );
        });

        this.renderer.listen(
          this.secondary.nativeElement,
          'animationend',
          () => {
            this.renderer.removeClass(
              this.secondary.nativeElement,
              `showFourTurf${formula.fourTurf.percentage}`
            );
            this.renderer.addClass(
              this.secondary.nativeElement,
              `remainFourTurf${formula.fourTurf.percentage}`
            );
          }
        );
      }
    );
  }
}
