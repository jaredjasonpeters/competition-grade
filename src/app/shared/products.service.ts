import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productSelected: boolean;
  productSelectedEvent: Subject<any> = new Subject();

  constructor() {}

  setProductSelected(bool): void {
    this.productSelectedEvent.next(bool);
  }
}
