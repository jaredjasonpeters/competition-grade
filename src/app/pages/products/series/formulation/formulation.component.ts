import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { SeriesFormulationService } from 'src/app/shared/series-formulation.service';
import { Formulation } from './formulation.model';

@Component({
  selector: 'app-formulation',
  templateUrl: './formulation.component.html',
  styleUrls: ['./formulation.component.css'],
})
export class FormulationComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
}
