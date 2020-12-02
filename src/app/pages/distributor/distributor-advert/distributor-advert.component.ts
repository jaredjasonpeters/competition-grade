import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from 'src/app/shared/adv.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-distributor-advert',
  templateUrl: './distributor-advert.component.html',
  styleUrls: ['./distributor-advert.component.css'],
})
export class DistributorAdvertComponent
  implements OnInit, CanComponentDeactivate {
  formSubmitted: boolean;
  constructor() {}

  ngOnInit(): void {}

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.formSubmitted;
  }

  setFormSubmitted(formSubmittedValue) {
    this.formSubmitted = formSubmittedValue;
  }
}
