import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  description: string;
  techsheet: string;
  images: string[];
  video?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeaturedProductService {
  private products = [
    {
      name: 'sombrero',
      description:
        'Sombrero is an Aggressive-Limousine Type Kentucky bluegrass. Sombrero is a very aggressive KBG, sending out many rhizomes quickly to ensure fast establishment and showing the ability to outcompete weeds and Poa annua, as well as serving as a self-repair mechanism. Sombrero exhibits a very upright growth habit. In a study by Bronson et al, 2005 at the University of Massachusetts, the leaf angle was the most important characteristic for wear tolerance, with a more vertical leaf angle associated with high wear tolerance. Sombrero showed the most upright growth out of all varieties in the 2005 NTEP trials. Characteristics in which Sombrero excels include leaf texture, stem rust, summer patch, leaf spot, fullness of canopy, wear tolerance, upright growth, and drought tolerance.',
      techsheet: '/assets/documents/sombrero_ts.pdf',
      images: [
        '/assets/sombrero_featured_main.jpg',
        '/assets/sombrero_featured_secondary.jpg',
        '/assets/sombrero_featured_tertiary.jpg'
      ],
      video: ''
    },
    {
      name: '4turf',
      description:
        '4Turf™ is a new turf-type tetraploid perennial ryegrass. Agricultural grass-growers have long understood the value of tetraploid perennial ryegrasses: rapid establishment, growth in cooler soil temperatures, and better environmental stress tolerance. Our breeders set out to pass on these characteristics to turf growers. They developed tetraploid technology to the point where turf managers, too, can experience the tetraploid advantage in a unique range of fine-leaved, high performance turf-type tetraploid perennial ryegrasses. Historically, perennial ryegrasses bred for turf use have been diploid. Tetraploid perennial ryegrasses are a technological step forward. They perform better because they have twice as many chromosomes and twice as much chloroplast in each cell. The extra chloroplast boost chlorophyll production, creating a healthier, higher-energy plant.',
      techsheet: '/assets/documents/4turf_ts.pdf',
      images: [
        '/assets/4turf_featured_main.jpg',
        '/assets/4turf_featured_secondary.jpg',
        '/assets/4turf_featured_tertiary.jpg'
      ],
      video: ''
    }
  ];

  constructor() {}

  getAll(): Product[] {
    return this.products;
  }

  getByProductName(productName): Product {
    let product_found: Product;
    this.products.forEach(product => {
      if (product.name === productName) {
        product_found = product;
      }
    });

    if (product_found) {
      return product_found;
    }
  }
}
