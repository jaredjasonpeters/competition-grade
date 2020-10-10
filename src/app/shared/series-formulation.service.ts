import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeriesFormulationService {
  startAnimationSubject = new Subject<any>();
  formulations: {
    speed: [];
    powers: [];
    agility: [];
  };

  constructor() {}

  startAnimation(): void {
    this.startAnimationSubject.next(true);
  }
}
