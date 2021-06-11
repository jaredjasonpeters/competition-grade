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
    'Your well on your way to superior turfgrass performance! Please fill out this form to be directed to more information and a local sales agent that will be able to assist your needs';

  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {}

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.formSubmitted;
  }

  setFormSubmitted(formSubmittedValue) {
    this.formSubmitted = formSubmittedValue;
  }
}
