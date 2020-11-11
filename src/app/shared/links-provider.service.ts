import { Injectable } from '@angular/core';

export interface Link {
title: string;
imagePath: string;
docPath?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LinksProviderService {

  defaultLinks = [
    {
      title: 'speed',
      imagePath: '../../../assets/speed_series.png',
    },
    {
      title: 'power',
      imagePath: '../../../assets/power_series.png',
    },
    {
      title: 'agility',
      imagePath: '../../../assets/agility_series.png',
    },
  ]

  links = {
  default: this.defaultLinks,
  adv : [{title: 'Brochure', imagePath: 'save_alt', docPath: '../../../assets/documents/sample.txt'}],
  power: [],
  speed: [],
  agility: []
  }

  constructor() { }

  getLinksByPage(page): {title: string, imagePath: string}[] {
    if([undefined, null, ''].includes(page)) {
       return this.links.default;
    }else {
      if(this.links[page].length === 0) {
        return this.links.default;
      } else {
        return this.links[page];
      }
    }
  }
}
