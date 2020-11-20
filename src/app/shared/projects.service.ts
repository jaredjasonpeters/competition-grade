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
      tags: [314, 304, 301],
      quotes: [],
      projectManager: 'Mike Burns',
    },
  ];

  constructor() {}

  getAll(): Project[] {
    return this.projects;
  }

  getByName(name): Project {
    const foundProject = this.projects.filter(
      (project) => project.name === name
    )[0];
    if (foundProject) {
      return foundProject;
    }
    return;
  }

  getBySearchFilters(searchFilters) {
    return;
  }
}
