import { Injectable } from '@angular/core';

export interface Distributors {
  companyName: string;
  websiteUrl: string;
  imagePath: string;
  partnerLevel?: 'Premium' | 'Standard';
  placement: number;
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
      partnerLevel: 'Premium',
      placement: 1,
    },
    {
      companyName: 'BWI',
      websiteUrl: 'http://bwicompanies.com',
      imagePath: '../../assets/bwi_logo.png',
      partnerLevel: 'Premium',
      placement: 3,
    },
    {
      companyName: 'Wilbur-Ellis',
      websiteUrl: 'https://ag.wilburellis.com/',
      imagePath: '../../assets/wilbur_ellis_logo.jpg',
      partnerLevel: 'Premium',
      placement: 2,
    },
    {
      companyName: 'Wilbur-Ellis',
      websiteUrl: 'https://ag.wilburellis.com/',
      imagePath: '../../assets/wilbur_ellis_logo.jpg',
      partnerLevel: 'Premium',
      placement: 4,
    },
    {
      companyName: 'Wilbur-Ellis',
      websiteUrl: 'https://ag.wilburellis.com/',
      imagePath: '../../assets/wilbur_ellis_logo.jpg',
      partnerLevel: 'Premium',
      placement: 5,
    },
  ];

  constructor() {}

  getAll(): Distributors[] {
    return this.distributors;
  }

  getPremium(): Distributors[] {
    return this.distributors
      .filter((distributor) => distributor.partnerLevel === 'Premium')
      .sort((a, b) => a.placement - b.placement);
  }

  getLength(): number {
    return this.distributors.length;
  }
}
