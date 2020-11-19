import { Injectable } from '@angular/core';
import { DistributorsEnum } from '../models/distributor.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 1,
      name: 'Longwood Cricket Club',
      description: '',
      series: 'agility',
      distributor: DistributorsEnum['Walker Supply'],
      location: '',
      icon: '',
      images: [
        { imageUrl: '', caption: '' },
        { imageUrl: '', caption: '' },
        { imageUrl: '', caption: '' },
      ],
      quotes: [],
      projectManager: 'Mike Burns',
    },
  ];

  constructor() {}
}
