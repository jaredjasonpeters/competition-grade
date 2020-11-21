import { Injectable } from '@angular/core';
import { DistributorsEnum } from '../models/distributor.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 1,
      name: 'Longwood Cricket Club',
      description: `This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.`,
      series: 'agility',
      distributor: DistributorsEnum['Walker Supply'],
      location: 'Chestnut Hill, MA',
      icon: '',
      images: [
        {
          imageUrl:
            '../../assets/projectImages/LongwoodCC/LWCC_tenniscourt_800x500.png',
          caption: '',
        },
        {
          imageUrl:
            '../../assets/projectImages/LongwoodCC/LWCC_tenniscourt_action_800x500.png',
          caption: '',
        },
        {
          imageUrl:
            '../../assets/projectImages/LongwoodCC/LWCC_tenniscourt_closeup_800x500.png',
          caption: '',
        },
        {
          imageUrl:
            '../../assets/projectImages/LongwoodCC/LWCC_tenniscourt_closeupmow_800x500.png',
          caption: '',
        },
        {
          imageUrl:
            '../../assets/projectImages/LongwoodCC/LWCC_tenniscourt_mowing_800x500.png',
          caption: '',
        },
        {
          imageUrl:
            '../../assets/projectImages/LongwoodCC/LWCC_tenniscourt_mowing2_800x500.png',
          caption: '',
        },
        {
          imageUrl:
            '../../assets/projectImages/LongwoodCC/LWCC_tenniscourt_mowing3_800x500.png',
          caption: '',
        },
      ],
      tags: [314, 301],
      quotes: [],
      projectManager: 'Mike Burns',
    },
    {
      id: 2,
      name: 'Bang the Gong',
      description: `This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.This lovely club has been refitted with all new Kentucky bluegrass carpet.`,
      series: 'agility',
      distributor: DistributorsEnum['Walker Supply'],
      location: 'Chestnut Hill, MA',
      icon: '',
      images: [
        {
          imageUrl:
            '../../assets/projectImages/LongwoodCC/LWCC_tenniscourt_800x500.png',
          caption: '',
        },
        {
          imageUrl:
            '../../assets/projectImages/LongwoodCC/LWCC_tenniscourt_action_800x500.png',
          caption: '',
        },
        {
          imageUrl:
            '../../assets/projectImages/LongwoodCC/LWCC_tenniscourt_closeup_800x500.png',
          caption: '',
        },
        {
          imageUrl:
            '../../assets/projectImages/LongwoodCC/LWCC_tenniscourt_closeupmow_800x500.png',
          caption: '',
        },
        {
          imageUrl:
            '../../assets/projectImages/LongwoodCC/LWCC_tenniscourt_mowing_800x500.png',
          caption: '',
        },
        {
          imageUrl:
            '../../assets/projectImages/LongwoodCC/LWCC_tenniscourt_mowing2_800x500.png',
          caption: '',
        },
        {
          imageUrl:
            '../../assets/projectImages/LongwoodCC/LWCC_tenniscourt_mowing3_800x500.png',
          caption: '',
        },
      ],
      tags: [314, 304, 301],
      quotes: [],
      projectManager: 'Mike Burns',
    },
  ];

  constructor() {}

  getAll(): Project[] {
    return this.projects;
  }

  getByName(searchTerm: string): Project[] | string {
    const foundProjects = this.projects.filter((project) => {
      const nameParts = this.formatStringForComparisson(project.name);
      const searchName = this.formatStringForComparisson(searchTerm);

      if (searchName.length > 1) {
        if (nameParts.includes(searchName) && searchName !== '') {
          return project;
        }
      }
    });
    if (searchTerm.length > 1) {
      if (foundProjects.length !== 0) {
        return foundProjects;
      }
      return name;
    }
  }

  getBySearchFilters(searchTerm, searchBy): Project[] | string {
    console.log('SEARCHBY', searchBy, 'SEARCHTERM', searchTerm);
    const foundProjects = this.projects.filter((project) => {
      let searchByParts;

      if (searchBy === 'product') {
        searchByParts = [
          this.formatStringForComparisson(project.series),
          ...project.tags,
        ].join(' ');
      } else {
        searchByParts = this.formatStringForComparisson(project[searchBy]);
      }

      console.log('SEARCHBYPARTS', searchByParts);
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

  formatStringForComparisson(term: string): string {
    return term.toLowerCase().trim();
  }
}
