import { Component, OnInit } from '@angular/core';
import { SeriesFormulationService } from 'src/app/shared/series-formulation.service';

@Component({
  selector: 'app-formulation-breakdown',
  templateUrl: './formulation-breakdown.component.html',
  styleUrls: ['./formulation-breakdown.component.css'],
})
export class FormulationBreakdownComponent implements OnInit {
  formulations;
  constructor(private seriesFormulationService: SeriesFormulationService) {}

  ngOnInit(): void {
    this.seriesFormulationService.formulationSubject.subscribe(
      ({ seriesName, formula }) => {
        this.formulations = formula;
      }
    );
  }
}
