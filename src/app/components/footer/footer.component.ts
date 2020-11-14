import { Component, OnDestroy, OnInit } from '@angular/core';
import { DistributorsService } from 'src/app/shared/distributors.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, OnDestroy {
  distributorsLength: number;
  footerLength: number;
  distributorLoggedIn: boolean;
  loggedInSubscription: Subscription;

  constructor(
    private distributorsService: DistributorsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.distributorsLength = this.distributorsService.getLength();
    this.footerLength = this.distributorsLength + 7;
    this.loggedInSubscription = this.authService.distributor.subscribe(
      (distributor) => {
        this.distributorLoggedIn = distributor ? true : false;
      }
    );
  }

  ngOnDestroy(): void {
    this.loggedInSubscription.unsubscribe();
  }
}
