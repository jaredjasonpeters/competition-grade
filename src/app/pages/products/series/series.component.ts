import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private seriesFormulationService: SeriesFormulationService,
    private renderer: Renderer2,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.seriesName = params.series;
      this.seriesInfo = this.seriesFormulationService.formulations[
        params.series
      ];
      this.seriesTags = this.seriesFormulationService.getTags(params.series);

      this.renderer.setStyle(
        this.menuRight.nativeElement,
        'background',
        `var(--cg_${params.series})`
      );
    });

    console.log('SERIESINFO', this.seriesInfo);
    console.log('SERIESTAGS', this.seriesTags);
  }

  onTagSelect(event): void {
    const images = Array.from(document.querySelectorAll('.activeTag'));
    images.forEach((image) => {
      this.renderer.removeClass(image, 'activeTag');
    });

    this.renderer.addClass(event.target, 'activeTag');
    this.seriesFormulationService.getFormulation(event.target.id);
  }
}
