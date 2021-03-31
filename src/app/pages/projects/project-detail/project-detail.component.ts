import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DistributorsService } from 'src/app/shared/distributors.service';
import { LayoutService } from 'src/app/shared/layout.service';
import { ProjectsService } from 'src/app/shared/projects.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  constructor(
    public layoutService: LayoutService,
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
