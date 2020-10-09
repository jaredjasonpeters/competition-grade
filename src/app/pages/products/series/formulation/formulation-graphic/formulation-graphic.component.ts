import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulation-graphic',
  templateUrl: './formulation-graphic.component.html',
  styleUrls: ['./formulation-graphic.component.css']
})
export class FormulationGraphicComponent implements OnInit {
  four_turf_percentage = 15;
  primary_percentage = 50;
  series_color = 'speed'
  constructor() { }

  ngOnInit(): void {
  }

}
