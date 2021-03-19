import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LayoutService } from 'src/app/shared/layout.service';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {
  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {}
}
