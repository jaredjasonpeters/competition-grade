import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/models/project.model';
import { ProjectsService } from '../../shared/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  currentSearchTerm: string;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    // this.fetchProjects();
  }

  fetchProjects(searchTerm): void {
    const result = this.projectsService.getByName(searchTerm);
    if (typeof result === 'string') {
      this.currentSearchTerm = result;

      this.projects = null;
    } else {
      this.projects = result;
      this.currentSearchTerm = null;
    }
  }

  clearForm(form: NgForm) {
    const currentSortBy = form.value.sortBy;
    form.setValue({
      searchTerm: null,
      sortBy: currentSortBy,
    });
    this.currentSearchTerm = null;
    this.projects = null;
  }
}
