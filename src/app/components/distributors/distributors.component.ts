import { Component, OnInit } from '@angular/core';
import {
  DistributorsService,
  Distributors,
} from '../../shared/distributors.service';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css'],
})
export class DistributorsComponent implements OnInit {
  private distributors: Distributors[];
  public length: number;

  constructor(private distributorsService: DistributorsService) {}

  ngOnInit(): void {
    this.distributors = this.distributorsService.getPremium();
    this.length = this.distributorsService.getLength();
  }

  getDistributors(): Distributors[] {
    return this.distributors;
  }
}
