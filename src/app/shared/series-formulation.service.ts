import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';
import { Formulation } from '../pages/products/series/formulation/formulation.model';

@Injectable({
  providedIn: 'root'
})
export class SeriesFormulationService {
  private formulationSubject$ = new Subject<any>();

  formulation$: Observable<any> = this.formulationSubject$.asObservable();

  private formulations = {
    speed: {
      overview: `Perennial ryegrass-based blends using varieties with market-leading wear tolerance and disease resistance`,
      components: ['Diploid Perennial Ryegrass', '4turf™ Perennial Ryegrass'],
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
          description: '3-Way Perennial Ryegrass Blend'
        },
        secondary: {
          percentage: 0
        },
        fourTurf: {
          percentage: 0
        }
      },
      104: {
        primary: {
          percentage: 80,
          description: '3-Way Diploid Perennial Ryegrass Blend'
        },
        secondary: {
          percentage: 0
        },
        fourTurf: {
          percentage: 20,
          description: 'Tetraploid Perennial Ryegrass'
        }
      }
    },
    power: {
      overview: `Tall fescue-based blends and mixtures exhibiting rapid tillering and high rhizome production, high resistance to major diseases, high density, and low mowing tolerance`,
      components: [
        'Turf-Type Tall Fescue',
        'Kentucky Bluegrass',
        '4turf™ Perennial Ryegrass'
      ],
      description: `The longer lived, lower maintenance qualities of Turf-type Tall Fescues are often chosen for permanent sports fields
      in the transition zone.  Modern, high end, DLF Pickseed Turf-type Tall Fescue cultivars bring the best of this historic species
      to market in Competition Grade Power Series.  The world’s largest cool season grass seed company, screens cultivars for all traits
      necessary for a Competition Grade tall fescue sports turf; early and rapid tiller expression, rhizomatous growth, finer leaf blade,
      attractive color, genetic disease resistance and deeper roots.  We scientifically design and test mixtures with Turf-type Tall Fescue
      and either Kentucky Bluegrass and/or 4Turf™ ryegrass. The addition of 4turf and/or Kentucky bluegrass allows for better fill, repair from
      wear and longer playability.  Where a high quality sports turf for cleated sports like football, soccer and baseball,  that requires less
      watering and lower inputs is needed; reach for Competition Power Series.  Power Series works well to be overseeded over Power Series if turf is damaged. `,
      recommendedUse: ['Football', 'Soccer', 'Rugby'],
      201: {
        primary: {
          percentage: 100,
          description: '3-way Turf-Type Tall Fescue Blend'
        },
        secondary: {
          percentage: 0
        },
        fourTurf: {
          percentage: 0
        }
      },
      202: {
        primary: {
          percentage: 90,
          description: 'Turf-Type Tall Fescue'
        },
        secondary: {
          percentage: 10,
          description: 'Kentucky Bluegrass'
        },
        fourTurf: {
          percentage: 0
        }
      },
      204: {
        primary: {
          percentage: 85,
          description: 'Turf-Type Tall Fescue'
        },
        secondary: {
          percentage: 5,
          description: 'Kentucky Bluegrass'
        },
        fourTurf: {
          percentage: 10,
          description: 'Tetraploid Perennial Ryegrass'
        }
      }
    },
    agility: {
      overview: `Kentucky bluegrass-based blends and mixtures with quick establishment, high wear tolerance and recovery, early green-up in the Spring, disease resistance and quick drought recovery`,
      components: [
        'Kentucky Bluegrass',
        'Diploid Perennial Ryegrass',
        '4turf™ Perennial Ryegrass'
      ],
      description: `Kentucky bluegrass, long considered the species of choices for Sports Turf where agronomically correct, you cannot get better than the mixtures from the Agility Series Competition Grade mixtures from DLF Pickseed.
      Hitting the Three Hole and always delivering impressive shear strength and sod knitting is the Proprietary cultivar Sombrero.
      Truly a unique variety, Sombrero, has been used successfully in our Kentucky bluegrass based sports turf mixtures since it’s release to market.
      And you can’t pitch around Sombrero because the lineup includes outstanding Kentucky bluegrass varieties that are chosen only after the highest level of testing,
      including wear trials at public trials as well as our own research farm.  A Murders Row of bluegrasses can only be improved by adding our Proprietary 4turf™ technology.
      Having increased germination rate under cooler soil temps, a recessed crown and color to mix with bluegrass 4turf adds serious pop to the lineup.  We call this series
      Agility because you can use it so many places.  For permanent bluegrass stand or by adding 4turf™, quick repairs plus the desired permanent bluegrass turf.
      For a classic Kentucky bluegrass sports turf where proper maintenance is available, the Agility Series cannot be beat.  Agility Series can be overseeded with Agility series,
      for a long term desired Kentucky bluegrass repair or with the Speed series for right now playability.   `,
      recommendedUse: ['Football', 'Soccer', 'Rugby'],
      301: {
        primary: {
          percentage: 100,
          description: `4-way Kentucky Bluegrass Blend with wear-tolerant Sombrero`
        },
        secondary: {
          percentage: 0
        },
        fourTurf: {
          percentage: 0
        }
      },
      304: {
        primary: {
          percentage: 80,
          description: '4-way Kentucky Bluegrass Blend'
        },
        secondary: {
          percentage: 0
        },
        fourTurf: {
          percentage: 20,
          description: 'Tetraploid Perennial Ryegrass'
        }
      },
      314: {
        primary: {
          percentage: 50,
          description: '3-way Kentucky Bluegrass Blend'
        },
        secondary: {
          percentage: 35,
          description: '2-way Diploid Perennial Ryegrass Blend'
        },
        fourTurf: {
          percentage: 15,
          description: 'Tetraploid Perennial Ryegrass'
        }
      }
    }
  };
  private formulationsSubject$ = new BehaviorSubject<any>(this.formulations);
  formulations$: Observable<any> = this.formulationsSubject$.asObservable();
  constructor() {}

  getFormulation(id): void {
    const series_split = id.split('_');
    const series_name = series_split[0];
    const series_number = series_split[1];

    const formulationObject = {
      seriesName: series_name,
      formula: this.formulations[series_name][series_number]
    };
    this.formulationSubject$.next(formulationObject);
  }

  getTags(seriesName) {
    const series = this.formulations[seriesName];
    const tags = [];
    for (let key in series) {
      if (
        series[key] instanceof Object === true &&
        series[key] instanceof Array === false
      ) {
        let res = {
          seriesName,
          seriesId: key
        };
        tags.push(res);
      }
    }
    return tags;
  }
}
