import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Formulation } from '../pages/products/series/formulation/formulation.model';

@Injectable({
  providedIn: 'root',
})
export class SeriesFormulationService {
  formulationSubject = new Subject<any>();
  formulations = {
    speed: {
      overview: `Perennial ryegrass-based blends using varieties with market-leading wear tolerance and disease resistance`,
      description: `Built around the rapid establishment of DLF Pickseed industry
      leading Perennial ryegrass cultivars and including the
      flexibility of Proprietary 4turf™ technology, Speed Series is
      provides the highest standard of fill in for repair and where
      Perennial ryegrass is the permanent turf. With multi-cultivar
      blends, we engineer turf that includes the characteristics
      necessary for truly Competition Grade turf; Grey leaf spot
      resistance, spreading characteristics, quick establishment and
      late fall – early spring growth.
     
      Perennial ryegrass is a great choice for “in the dirt” sports
      like football as winter overseeding of bermudagrass and repair
      of permanent Kentucky Bluegrass turf. Speed Series is ideal for
      season long interseeding or overseeding of wear spots, like
      goalie boxes, between the hash marks and center field.`,
      recommendedUse: ['Football', 'Soccer', 'Rugby'],
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
        secondary: {
          percentage: 0,
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
        secondary: {
          percentage: 0,
        },
        fourTurf: {
          percentage: 0,
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
        fourTurf: {
          percentage: 0,
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
        secondary: {
          percentage: 0,
        },
        fourTurf: {
          percentage: 0,
        },
      },
      304: {
        primary: {
          percentage: 80,
          description: '4-way Kentucky Bluegrass Blend',
        },
        secondary: {
          percentage: 0,
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

  getTags(seriesName) {
    const series = this.formulations[seriesName];
    const tags = [];
    for (let key in series) {
      if(series[key] instanceof Object === true && (series[key]) instanceof Array === false  ) {
        let res =  {
          seriesName, 
          seriesId: key
        }
        tags.push(res);
      }
    }
    return tags;
  }
}
