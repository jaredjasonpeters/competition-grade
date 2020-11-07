import { Component, OnInit } from '@angular/core';
import {
  DistributorsService,
  Distributor,
} from '../../shared/distributors.service';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css'],
})
export class DistributorsComponent implements OnInit {
  private distributors: Distributor[];
  public length: number;

  constructor(private distributorsService: DistributorsService) {}

  ngOnInit(): void {
    this.distributors = this.distributorsService.getPremium();
    this.length = this.distributorsService.getLength();
  }

  getDistributors(): Distributor[] {
    return this.distributors;
  }
}
