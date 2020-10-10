import { Component, OnInit } from '@angular/core';
import { SeriesFormulationService } from '../../../shared/series-formulation.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  constructor(private seriesFormulationService: SeriesFormulationService) {}

  ngOnInit(): void {}

  onTagSelect(event): void {
    console.log('EVENT', event);
    this.seriesFormulationService.startAnimation();
  }
}
