import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project.model';
import { DistributorsService } from 'src/app/shared/distributors.service';
import { ProjectsService } from 'src/app/shared/projects.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  constructor(
    public projectsService: ProjectsService,
    public distributorService: DistributorsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.projectsService.getById(id);
    });
  }

  getSeriesBg(series): string {
    return `url('/assets/${series}_color_bg.jpg')`;
  }
}
