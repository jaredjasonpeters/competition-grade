import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { DistributorsEnum } from '../models/distributor.model';
import { Project } from '../models/project.model';
import { projectsConfig } from '../configurations/projects.config';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projectsAvailable: boolean;
  private projects: Project[] = [
    {
      id: 1,
      name: 'Longwood Cricket Club',
      description: `This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.`,
      featured: true,
      inProgress: false,
      series: 'agility',
      distributor: DistributorsEnum['Walker Supply'],
      location: 'Chestnut Hill, MA',
      icon: '',
      thumbnail:
        '/assets/projectImages/LongwoodCC/LWCC_tenniscourt_800x500.png',
      images: [
        {
          imagePath:
            '/assets/projectImages/LongwoodCC/LWCC_tenniscourt_800x500.png',
          caption: ''
        },
        {
          imagePath:
            '/assets/projectImages/LongwoodCC/LWCC_tenniscourt_action_800x500.png',
          caption: ''
        },
        {
          imagePath:
            '/assets/projectImages/LongwoodCC/LWCC_tenniscourt_closeup_800x500.png',
          caption: ''
        },
        {
          imagePath:
            '/assets/projectImages/LongwoodCC/LWCC_tenniscourt_closeupmow_800x500.png',
          caption: ''
        },
        {
          imagePath:
            '/assets/projectImages/LongwoodCC/LWCC_tenniscourt_mowing_800x500.png',
          caption: ''
        },
        {
          imagePath:
            '/assets/projectImages/LongwoodCC/LWCC_tenniscourt_mowing2_800x500.png',
          caption: ''
        },
        {
          imagePath:
            '/assets/projectImages/LongwoodCC/LWCC_tenniscourt_mowing3_800x500.png',
          caption: ''
        }
      ],
      tags: [314, 301],
      quotes: [],
      projectManager: 'Mike Burns'
    },
    {
      id: 2,
      name: 'PNC Park',
      description: `This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.`,
      featured: true,
      inProgress: true,
      series: 'agility',
      distributor: DistributorsEnum['Walker Supply'],
      location: 'Pittsburgh, PA',
      icon: '',
      thumbnail:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffullhdpictures.com%2Fwp-content%2Fuploads%2F2015%2F10%2FPittsburgh-Pirates-Stadium-Wallpaper.jpg&f=1&nofb=1',
      images: [
        {
          imagePath:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffullhdpictures.com%2Fwp-content%2Fuploads%2F2015%2F10%2FPittsburgh-Pirates-Stadium-Wallpaper.jpg&f=1&nofb=1',
          caption: ''
        }
      ],
      tags: [314, 301],
      quotes: [],
      projectManager: 'That Guy'
    },
    {
      id: 3,
      name: 'Heinz Field',
      description: `This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.`,
      featured: true,
      inProgress: true,
      series: 'agility',
      distributor: DistributorsEnum['Walker Supply'],
      location: 'Pittsburgh, PA',
      icon: '',
      thumbnail:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnicepickcowher.com%2Ffiles%2F2014%2F04%2Fnfl-tennessee-titans-pittsburgh-steelers1.jpg&f=1&nofb=1',
      images: [
        {
          imagePath:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnicepickcowher.com%2Ffiles%2F2014%2F04%2Fnfl-tennessee-titans-pittsburgh-steelers1.jpg&f=1&nofb=1',
          caption: ''
        }
      ],
      tags: [314, 301],
      quotes: [],
      projectManager: 'That Guy'
    },
    {
      id: 4,
      name: 'Paul Brown Stadium',
      description: `This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.`,
      featured: true,
      inProgress: true,
      series: 'agility',
      distributor: DistributorsEnum['Walker Supply'],
      location: 'Cleveland, OH',
      icon: '',
      thumbnail:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages-medium-large-5%2F3-cleveland-browns-stadium-robert-harmon.jpg&f=1&nofb=1',
      images: [
        {
          imagePath:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages-medium-large-5%2F3-cleveland-browns-stadium-robert-harmon.jpg&f=1&nofb=1',
          caption: ''
        }
      ],
      tags: [314, 301],
      quotes: [],
      projectManager: 'That Guy'
    }
  ];

  private selectedProjectSubject$: BehaviorSubject<
    Project | {}
  > = new BehaviorSubject({});
  public selectedProject$: Observable<
    Project | {}
  > = this.selectedProjectSubject$.asObservable();

  constructor() {
    this.projectsAvailable = projectsConfig.showProjects;
  }

  getAll(): Project[] {
    return this.projects;
  }

  getById(id): void {
    const selectedProject = this.projects.filter(project => {
      return project.id == id;
    });
    this.selectedProjectSubject$.next(selectedProject);
  }

  getByName(searchTerm: string): Project[] | string {
    const foundProjects = this.projects.filter(project => {
      const nameParts = this.formatStringForComparisson(project.name);
      const searchName = this.formatStringForComparisson(searchTerm);

      if (searchName.length > 1) {
        if (nameParts.includes(searchName) && searchName !== '') {
          return project;
        }
      }
    });
    if (searchTerm.length > 1) {
      if (foundProjects.length > 0) {
        return foundProjects;
      }
      return searchTerm;
    }
  }

  getBySearchFilters(searchTerm, searchBy): Project[] | string {
    const foundProjects = this.projects.filter(project => {
      let searchByParts;

      if (searchBy === 'product') {
        searchByParts = [
          this.formatStringForComparisson(project.series),
          ...project.tags
        ].join(' ');
      } else {
        searchByParts = this.formatStringForComparisson(project[searchBy]);
      }
      const search = this.formatStringForComparisson(searchTerm);

      if (search.length > 1) {
        if (searchByParts.includes(search) && search !== '') {
          return project;
        }
      }
    });
    if (searchTerm.length > 1) {
      if (foundProjects.length !== 0) {
        return foundProjects;
      }
      return searchTerm;
    }
  }

  getFeatured() {
    return this.getAll().filter(project => project.featured);
  }

  formatStringForComparisson(term: string): string {
    return term.toLowerCase().trim();
  }
}
