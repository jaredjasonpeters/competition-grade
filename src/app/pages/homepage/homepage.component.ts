import { Component, OnChanges, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/shared/projects.service';
import { LayoutService } from '../../shared/layout.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: []
})
export class HomepageComponent implements OnInit, OnChanges {
  size: string;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    public layoutService: LayoutService,
    private projectsService: ProjectsService
  ) {
    this.titleService.setTitle('Competition Grade Seed');
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {}
}
