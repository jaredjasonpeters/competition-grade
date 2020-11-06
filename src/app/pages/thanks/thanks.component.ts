import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit, OnDestroy{
  pageToDisplay;
  queryParamsSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe((result) => {
      console.log('ROUTE QUERY PARAMS', result);
    })
    
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

}
