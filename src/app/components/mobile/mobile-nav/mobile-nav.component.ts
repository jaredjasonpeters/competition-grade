import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MobileNavComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor() {}

  ngOnInit(): void {}

  openMenu() {
    this.trigger.openMenu();
  }
}
