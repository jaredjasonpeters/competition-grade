import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-comp-grade',
  templateUrl: './why-comp-grade.component.html',
  styleUrls: ['./why-comp-grade.component.css']
})
export class WhyCompGradeComponent implements OnInit {
  needsPageHeader: Boolean = true;
  pageHeaderTitle: String = 'NEW PLAYER IN THE GAME >> COMPETITION GRADE'
  constructor() { }

  ngOnInit(): void {
  }

}
