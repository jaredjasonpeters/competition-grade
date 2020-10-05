import { Component, OnInit } from '@angular/core';
import { DistributorsService } from 'src/app/shared/distributors.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  distributorsLength: number;
  footerLength: number;

  constructor(private distributorsService: DistributorsService) {}

  ngOnInit(): void {
    this.distributorsLength = this.distributorsService.getLength();
    this.footerLength = this.distributorsLength + 7;
  }
}
