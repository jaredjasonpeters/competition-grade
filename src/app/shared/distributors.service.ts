import { Injectable } from '@angular/core';

export interface Distributor {
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
  distributors: Distributor[] = [
     {
      companyName: 'Walker Supply',
      websiteUrl: 'https://www.walkersupplyinc.com/',
      imagePath: '../../assets/walker_supply_logo.png',
      partnerLevel: 'Premium',
      placement: 1,
    },
    {
      companyName: 'Tom Irwin',
      websiteUrl: 'http://tomirwin.com',
      imagePath: '../../assets/tom_irwin_logo.png',
      partnerLevel: 'Premium',
      placement: 2,
    },
    {
      companyName: 'BWI',
      websiteUrl: 'http://bwicompanies.com',
      imagePath: '../../assets/bwi_logo.png',
      partnerLevel: 'Premium',
      placement: 3,
    },
    {
      companyName: 'Wilbur Ellis',
      websiteUrl: 'https://ag.wilburellis.com/',
      imagePath: '../../assets/wilbur_ellis_logo.png',
      partnerLevel: 'Premium',
      placement: 4,
    },
   
  ];

  constructor() {}

  getAll(): Distributor[] {
    return this.distributors;
  }

  getPremium(): Distributor[] {
    return this.distributors
      .filter((distributor) => distributor.partnerLevel === 'Premium')
      .sort((a, b) => a.placement - b.placement);
  }

  getLength(): number {
    return this.distributors.length;
  }

  getByName(name): Distributor {
    for (const distributor of this.distributors) {
      if(distributor.companyName.toLowerCase() === name.toLowerCase()) {
        return distributor;
      }
    }
  } 
}
