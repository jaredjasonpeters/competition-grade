import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { LayoutService } from 'src/app/shared/layout.service';
import { ProjectsService } from 'src/app/shared/projects.service';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.css']
})
export class FeaturedProjectsComponent implements OnInit {
  constructor(
    private projectsService: ProjectsService,
    public layoutService: LayoutService
  ) {}
  projects: Project[];
  ngOnInit(): void {
    this.projects = this.projectsService.getFeatured();
  }
}
