import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from 'src/app/shared/adv.guard';
import { Observable } from 'rxjs';
import { LayoutService } from 'src/app/shared/layout.service';

@Component({
  selector: 'app-distributor-advert',
  templateUrl: './distributor-advert.component.html',
  styleUrls: ['./distributor-advert.component.css']
})
export class DistributorAdvertComponent
  implements OnInit, CanComponentDeactivate {
  formSubmitted: boolean;
  subHeadingText =
    'Your on your way to superior turfgrass performance, we just need some information to better serve your needs';

  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {}

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.formSubmitted;
  }

  setFormSubmitted(formSubmittedValue) {
    this.formSubmitted = formSubmittedValue;
  }
}
