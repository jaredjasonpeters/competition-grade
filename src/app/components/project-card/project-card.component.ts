import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { DistributorsService } from 'src/app/shared/distributors.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  constructor(private distributorsService: DistributorsService) {}

  ngOnInit(): void {}

  getFormattedTags(): string {
    return this.project.tags.sort((a, b) => a - b).join(', ');
  }

  getDistributorImage() {
    const dist = this.distributorsService.getByName(this.project.distributor);
    return dist.imagePath;
  }
}
