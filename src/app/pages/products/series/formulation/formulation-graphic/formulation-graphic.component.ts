import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SeriesFormulationService } from '../../../../../shared/series-formulation.service';

@Component({
  selector: 'app-formulation-graphic',
  templateUrl: './formulation-graphic.component.html',
  styleUrls: ['./formulation-graphic.component.css']
})
export class FormulationGraphicComponent implements OnInit {
  @ViewChild('Primary', { static: false }) primary: ElementRef;
  @ViewChild('Secondary', { static: false }) secondary: ElementRef;
  @ViewChild('bag_clip', { static: true }) bagClip: ElementRef;

  seriesColor: string;
  animationStatus: string;

  constructor(
    private seriesFormulationService: SeriesFormulationService,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.seriesFormulationService.formulation$.subscribe(
      ({ seriesName, formula }) => {
        this.router.events.subscribe(routerEvent => {
          if (routerEvent instanceof NavigationEnd) {
            this.renderer.removeClass(this.bagClip.nativeElement, 'hideBag');
          }
        });

        this.renderer.removeClass(this.bagClip.nativeElement, 'hideBag');
        this.removeRemainsClasses(
          this.renderer,
          this.primary.nativeElement,
          'remainPrimary',
          formula.primary.percentage
        );
        this.removeRemainsClasses(
          this.renderer,
          this.secondary.nativeElement,
          'remainFourTurf',
          formula.fourTurf.percentage
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

        this.renderer.addClass(
          this.secondary.nativeElement,
          `showFourTurf${formula.fourTurf.percentage}`
        );

        this.renderer.addClass(this.bagClip.nativeElement, 'fadeBagArtwork');

        //listen for on animation end to remove classes //

        this.renderer.listen(this.bagClip.nativeElement, 'animationend', () => {
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
          this.removeRemainsClasses(
            this.renderer,
            this.primary.nativeElement,
            'remainPrimary',
            formula.primary.percentage
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
            this.removeRemainsClasses(
              this.renderer,
              this.secondary.nativeElement,
              'remainFourTurf',
              formula.fourTurf.percentage
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
  removeRemainsClasses(renderer, element, prestring, currentPercentage) {
    const percentages = [
      0,
      5,
      10,
      15,
      20,
      25,
      30,
      35,
      40,
      45,
      50,
      55,
      60,
      65,
      70,
      75,
      80,
      85,
      90,
      95,
      100
    ];
    percentages.forEach(percentage => {
      if (percentage !== currentPercentage) {
        renderer.removeClass(element, `${prestring}${percentage}`);
      }
    });
  }
}
