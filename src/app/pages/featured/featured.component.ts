import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit, OnDestroy {

  itemName: String;
  itemParamSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.itemParamSubscription = this.route.params.subscribe(params => {
      this.itemName = params.item
    })
  }

  ngOnDestroy(): void {
    this.itemParamSubscription.unsubscribe();
  }

}
