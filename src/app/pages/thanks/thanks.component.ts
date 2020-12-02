import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Distributor } from 'src/app/models/distributor.model';
import { DistributorsService } from 'src/app/shared/distributors.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css'],
})
export class ThanksComponent implements OnInit, OnDestroy {
  pageToDisplay;
  queryParamsSubscription: Subscription;
  distributor: Distributor;

  constructor(
    private route: ActivatedRoute,
    private distributorsService: DistributorsService
  ) {}

  ngOnInit(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      ({ distributor }) => {
        console.log('ROUTE QUERY PARAMS', distributor);
        this.distributor = this.distributorsService.getByName(distributor);
        console.log('DISTRIBUTRO', this.distributor);
      }
    );
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }
}
