import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/models/project.model';
import { LayoutService } from 'src/app/shared/layout.service';
import { ProjectsService } from '../../shared/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  currentSearchTerm: string;
  currentSearchBy: string;

  constructor(
    public layoutService: LayoutService,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    // this.fetchProjects();
  }

  fetchProjects([searchTerm, searchBy]): void {
    const result = this.projectsService.getBySearchFilters(
      searchTerm,
      searchBy
    );
    if (typeof result === 'string') {
      this.currentSearchTerm = result;
      this.currentSearchBy = searchBy;
      this.projects = null;
    } else {
      this.projects = result;
      this.currentSearchTerm = '';
    }
  }

  clearForm(form: NgForm): void {
    const currentSearchBy = form.value.searchBy;
    form.setValue({
      searchTerm: '',
      searchBy: currentSearchBy
    });
    this.currentSearchTerm = '';
    this.currentSearchBy = '';
    this.projects = null;
  }
}
