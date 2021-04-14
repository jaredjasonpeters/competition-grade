import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ProjectsService } from 'src/app/shared/projects.service';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MobileNavComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor(public projectsService: ProjectsService) {}

  ngOnInit(): void {}

  openMenu() {
    this.trigger.openMenu();
  }
}
