import { Component, OnInit } from '@angular/core';
import { SeriesFormulationService } from 'src/app/shared/series-formulation.service';
import { Formulation } from './formulation.model';

@Component({
  selector: 'app-formulation',
  templateUrl: './formulation.component.html',
  styleUrls: ['./formulation.component.css'],
})
export class FormulationComponent implements OnInit {
  formulations;

  constructor(private seriesFormulationService: SeriesFormulationService) {}

  ngOnInit(): void {
    this.seriesFormulationService.formulationSubject.subscribe(
      ({ seriesName, formula }) => {
        this.formulations = formula;
        console.log('FORMULATION', formula);
      }
    );
  }
}
