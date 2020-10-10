import { Component, OnInit, Renderer2 } from '@angular/core';
import { SeriesFormulationService } from '../../../shared/series-formulation.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  constructor(
    private seriesFormulationService: SeriesFormulationService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  onTagSelect(event): void {
    const images = [...document.querySelectorAll('.activeTag')];
    images.forEach((image) => {
      this.renderer.removeClass(image, 'activeTag');
    });

    this.renderer.addClass(event.target, 'activeTag');
    this.seriesFormulationService.getFormulation(event.target.id);
  }
}
