import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { SeriesFormulationService } from 'src/app/shared/series-formulation.service';

@Component({
  selector: 'app-formulation-breakdown',
  templateUrl: './formulation-breakdown.component.html',
  styleUrls: ['./formulation-breakdown.component.css'],
})
export class FormulationBreakdownComponent implements OnInit {
  formulations = {
    primary: {
      percentage: 0,
      description: '',
    },
    secondary: {
      percentage: 0,
      description: '',
    },
    fourTurf: {
      percentage: 0,
      description: '',
    },
  };
  @ViewChild('primaryFormulation', { static: true })
  primaryFormulation: ElementRef;
  @ViewChild('secondaryFormulation', { static: true })
  secondaryFormulation: ElementRef;
  @ViewChild('fourTurfFormulation', { static: true })
  fourTurfFormulation: ElementRef;

  constructor(
    private seriesFormulationService: SeriesFormulationService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.seriesFormulationService.formulationSubject.subscribe(
      ({ seriesName, formula }) => {
        this.formulations = formula;

        if (this.formulations.primary.percentage !== 0) {
          this.renderer.addClass(
            this.primaryFormulation.nativeElement,
            'fadeInPrimary'
          );
        }
        if (this.formulations.secondary.percentage !== 0) {
          this.renderer.addClass(
            this.secondaryFormulation.nativeElement,
            'fadeInSecondary'
          );
        }
        if (this.formulations.fourTurf.percentage !== 0) {
          this.renderer.addClass(
            this.fourTurfFormulation.nativeElement,
            'fadeInFourTurf'
          );
        }

        this.renderer.removeClass(
          this.primaryFormulation.nativeElement,
          'show'
        );
        this.renderer.removeClass(
          this.secondaryFormulation.nativeElement,
          'show'
        );
        this.renderer.removeClass(
          this.fourTurfFormulation.nativeElement,
          'show'
        );

        this.renderer.addClass(this.primaryFormulation.nativeElement, 'hide');
        this.renderer.addClass(this.secondaryFormulation.nativeElement, 'hide');
        this.renderer.addClass(this.fourTurfFormulation.nativeElement, 'hide');

        this.renderer.addClass(
          this.primaryFormulation.nativeElement,
          'primaryBackground'
        );

        this.renderer.addClass(
          this.fourTurfFormulation.nativeElement,
          'secondaryBackground'
        );
        this.renderer.addClass(
          this.fourTurfFormulation.nativeElement,
          'fourTurfBackground'
        );

        this.renderer.listen(
          this.primaryFormulation.nativeElement,
          'animationend',
          (): void => {
            this.renderer.removeClass(
              this.primaryFormulation.nativeElement,
              'fadeInPrimary'
            );
            if (this.formulations.primary.percentage !== 0) {
              this.renderer.addClass(
                this.primaryFormulation.nativeElement,
                'show'
              );
              this.renderer.removeClass(
                this.primaryFormulation.nativeElement,
                'hide'
              );
            }
          }
        );
        this.renderer.listen(
          this.secondaryFormulation.nativeElement,
          'animationend',
          (): void => {
            this.renderer.removeClass(
              this.secondaryFormulation.nativeElement,
              'fadeInSecondary'
            );

            if (this.formulations.secondary.percentage !== 0) {
              this.renderer.removeClass(
                this.secondaryFormulation.nativeElement,
                'hide'
              );
              this.renderer.addClass(
                this.secondaryFormulation.nativeElement,
                'show'
              );
            }
          }
        );
        this.renderer.listen(
          this.fourTurfFormulation.nativeElement,
          'animationend',
          (): void => {
            this.renderer.removeClass(
              this.fourTurfFormulation.nativeElement,
              'fadeInFourTurf'
            );
            if (this.formulations.fourTurf.percentage !== 0) {
              this.renderer.removeClass(
                this.fourTurfFormulation.nativeElement,
                'hide'
              );
              this.renderer.addClass(
                this.fourTurfFormulation.nativeElement,
                'show'
              );
            }
          }
        );
      }
    );
  }
}
