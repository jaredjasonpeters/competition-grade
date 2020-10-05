import { Injectable } from '@angular/core';

export interface Distributors {
  companyName: string;
  websiteUrl: string;
  imagePath: string;
}

@Injectable({
  providedIn: 'root',
})
export class DistributorsService {
  distributors: Distributors[] = [
    {
      companyName: 'Tom Irwin',
      websiteUrl: 'http://tomirwin.com',
      imagePath: '../../assets/tom_irwin_logo.jpg',
    },
    {
      companyName: 'Bwi',
      websiteUrl: '"http://bwicompanies.com"',
      imagePath: '../../assets/bwi_logo.png',
    },
  ];

  constructor() {}

  getAll(): Distributors[] {
    return this.distributors;
  }

  getLength(): number {
    return this.distributors.length;
  }
}
