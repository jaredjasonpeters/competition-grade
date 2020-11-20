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
  statusMessage: string;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    // this.fetchProjects();
  }

  fetchProjects(searchTerm): void {
    const result = this.projectsService.getByName(searchTerm);
    console.log('STATUS MESSAGE', result);
    if (typeof result === 'string') {
      this.statusMessage = result;

      this.projects = null;
    } else {
      this.projects = result;
      this.statusMessage = null;
    }
  }

  clearForm(form: NgForm) {
    form.reset();
    this.statusMessage = null;
  }
}
