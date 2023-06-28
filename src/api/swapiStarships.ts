import {formatNumberString} from 'helpers/formatters';

import {SwapiListResponse} from './common';

export interface SwapiStarships {
  count: number;
  next: string | null;
  previous: string | null;
  results: SwapiStarship[];
}

export interface SwapiStarship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export const parseSwapiStarships = (
  data: SwapiStarships,
): SwapiListResponse => {
  return {
    count: data.count,
    next: data.next,
    previous: data.previous,
    results: data.results.map(starship => ({
      id: starship.url,
      title: starship.name,
      subtitle: `model: ${starship.model} | manufacturer: ${
        starship.manufacturer
      } | cost: ${formatNumberString(
        starship.cost_in_credits,
      )} credits | length: ${formatNumberString(
        starship.length,
      )} | max speed: ${formatNumberString(
        starship.max_atmosphering_speed,
      )} | crew ${formatNumberString(
        starship.crew,
      )} | passengers: ${formatNumberString(
        starship.passengers,
      )} | cargo capacity: ${formatNumberString(
        starship.cargo_capacity,
      )} | hyperdrive rating: ${starship.hyperdrive_rating} | starship class: ${
        starship.starship_class
      }`,
    })),
  };
};

export const mockSwapiStarships: SwapiStarships = {
  count: 3,
  next: null,
  previous: null,
  results: [
    {
      name: 'Star Destroyer',
      model: 'Imperial I-class Star Destroyer',
      manufacturer: 'Kuat Drive Yards',
      cost_in_credits: '150000000',
      length: '1,600',
      max_atmosphering_speed: '975',
      crew: '47,060',
      passengers: 'n/a',
      cargo_capacity: '36000000',
      consumables: '2 years',
      hyperdrive_rating: '2.0',
      MGLT: '60',
      starship_class: 'Star Destroyer',
      pilots: [],
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/',
      ],
      created: '2014-12-10T15:08:19.848000Z',
      edited: '2014-12-20T21:23:49.870000Z',
      url: 'https://swapi.dev/api/starships/3/',
    },
    {
      name: 'Sentinel-class landing craft',
      model: 'Sentinel-class landing craft',
      manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
      cost_in_credits: '240000',
      length: '38',
      max_atmosphering_speed: '1000',
      crew: '5',
      passengers: '75',
      cargo_capacity: '180000',
      consumables: '1 month',
      hyperdrive_rating: '1.0',
      MGLT: '70',
      starship_class: 'landing craft',
      pilots: [],
      films: ['https://swapi.dev/api/films/1/'],
      created: '2014-12-10T15:48:00.586000Z',
      edited: '2014-12-20T21:23:49.873000Z',
      url: 'https://swapi.dev/api/starships/5/',
    },
    {
      name: 'Death Star',
      model: 'DS-1 Orbital Battle Station',
      manufacturer:
        'Imperial Department of Military Research, Sienar Fleet Systems',
      cost_in_credits: '1000000000000',
      length: '120000',
      max_atmosphering_speed: 'n/a',
      crew: '342,953',
      passengers: '843,342',
      cargo_capacity: '1000000000000',
      consumables: '3 years',
      hyperdrive_rating: '4.0',
      MGLT: '10',
      starship_class: 'Deep Space Mobile Battlestation',
      pilots: [],
      films: ['https://swapi.dev/api/films/1/'],
      created: '2014-12-10T16:36:50.509000Z',
      edited: '2014-12-20T21:26:24.783000Z',
      url: 'https://swapi.dev/api/starships/9/',
    },
    {
      name: 'Millennium Falcon',
      model: 'YT-1300 light freighter',
      manufacturer: 'Corellian Engineering Corporation',
      cost_in_credits: '100000',
      length: '34.37',
      max_atmosphering_speed: '1050',
      crew: '4',
      passengers: '6',
      cargo_capacity: '100000',
      consumables: '2 months',
      hyperdrive_rating: '0.5',
      MGLT: '75',
      starship_class: 'Light freighter',
      pilots: [
        'https://swapi.dev/api/people/13/',
        'https://swapi.dev/api/people/14/',
        'https://swapi.dev/api/people/25/',
        'https://swapi.dev/api/people/31/',
      ],
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/',
      ],
      created: '2014-12-10T16:59:45.094000Z',
      edited: '2014-12-20T21:23:49.880000Z',
      url: 'https://swapi.dev/api/starships/10/',
    },
  ],
};
