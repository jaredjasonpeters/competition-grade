import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { SeriesFormulationService } from '../../../shared/series-formulation.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  @ViewChild('menuRight', { static: true }) menuRight: ElementRef<HTMLElement>;
  seriesName: string;
  seriesInfo;
  seriesTags;

  formulationToggled: boolean = false;

  constructor(
    private seriesFormulationService: SeriesFormulationService,
    private renderer: Renderer2,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.seriesName = params.series;
      this.seriesFormulationService.formulations$
        .pipe(
          tap((formulations) => {
            console.log('FORMULATIONS', formulations);
            this.seriesInfo = formulations[params.series];
          })
        )
        .subscribe();
      this.seriesTags = this.seriesFormulationService.getTags(params.series);

      this.renderer.setStyle(
        this.menuRight.nativeElement,
        'background',
        `var(--cg_${params.series})`
      );
    });
  }

  onTagSelect(event): void {
    const images = Array.from(document.querySelectorAll('.activeTag'));
    images.forEach((image) => {
      this.renderer.removeClass(image, 'activeTag');
    });

    this.renderer.addClass(event.target, 'activeTag');
    this.seriesFormulationService.getFormulation(event.target.id);
  }

  setToggled(toggledBool: boolean) {
    setTimeout(() => {
      this.formulationToggled = toggledBool;
    }, 1100);
  }
}
