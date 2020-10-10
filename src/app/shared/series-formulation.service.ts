import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeriesFormulationService {
  formulationSubject = new Subject<any>();
  formulations = {
    speed: {
      101: {
        primary: {
          percentage: 100,
          description: '3-Way Perennial Ryegrass Blend',
        },
        secondary: {
          percentage: 0,
        },
        fourTurf: {
          percentage: 0,
        },
      },
      104: {
        primary: {
          percentage: 80,
          description: '3-Way Diploid Perennial Ryegrass Blend',
        },
        fourTurf: {
          percentage: 20,
          description: 'Tetraploid Perennial Ryegrass Blend',
        },
      },
    },
    power: {
      201: {
        primary: {
          percentage: 100,
          description: '3-way Turf-Type Tall Fescue Blend',
        },
      },
      202: {
        primary: {
          percentage: 90,
          description: 'Turf-Type Tall Fescue',
        },
        secondary: {
          percentage: 10,
          description: 'Kentucky Bluegrass',
        },
      },
      204: {
        primary: {
          percentage: 85,
          description: 'Turf-Type Tall Fescue',
        },
        secondary: {
          percentage: 5,
          description: 'Kentucky Bluegrass',
        },
        fourTurf: {
          percentage: 10,
          description: 'Tetraploid Perennial Ryegrass Blend',
        },
      },
    },
    agility: {
      301: {
        primary: {
          percentage: 100,
          description:
            '4-way Kentucky Bluegrass Blend featuring wear-tolerant Sombrero',
        },
      },
      304: {
        primary: {
          percentage: 80,
          description: '4-way Kentucky Bluegrass Blend',
        },
        fourTurf: {
          percentage: 20,
          description: 'Tetraploid Perennial Ryegrass Blend',
        },
      },
      314: {
        primary: {
          percentage: 50,
          description: '4-way Kentucky Bluegrass Blend',
        },
        secondary: {
          percentage: 35,
          description: '3-way Diploid Perennial Ryegrass Blend',
        },
        fourTurf: {
          percentage: 15,
          description: 'Tetraploid Perennial Ryegrass Blend',
        },
      },
    },
  };

  constructor() {}

  getFormulation(id): void {
    const series_split = id.split('_');
    const series_name = series_split[0];
    const series_number = series_split[1];
    console.log('SN', series_name, 'SNUM', series_number);
    const formulationObject = {
      seriesName: series_name,
      formula: this.formulations[series_name][series_number],
    };
    this.formulationSubject.next(formulationObject);
  }
}
