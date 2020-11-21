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

  fetchProjects([searchTerm, searchBy]): void {
    // const result = this.projectsService.getByName(searchTerm);
    console.log('SEARCHBY', searchBy);
    const result = this.projectsService.getByName(searchTerm);
    if (typeof result === 'string') {
      this.currentSearchTerm = result;

      this.projects = null;
    } else {
      this.projects = result;
      this.currentSearchTerm = null;
    }
  }

  clearForm(form: NgForm): void {
    const currentSearchBy = form.value.searchBy;
    form.setValue({
      searchTerm: null,
      searchBy: currentSearchBy,
    });
    this.currentSearchTerm = null;
    this.projects = null;
  }
}
