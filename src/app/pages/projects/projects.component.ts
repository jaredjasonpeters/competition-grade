import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectsService } from '../../shared/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    // this.fetchProjects();
  }

  fetchProjects(searchTerm): void {
    this.projects = this.projectsService.getAll();
  }
}
