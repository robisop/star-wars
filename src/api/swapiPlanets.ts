import {formatNumberString} from 'helpers/formatters';

import {SwapiListResponse} from './common';

export interface SwapiPlanets {
  count: number;
  next: string | null;
  previous: string | null;
  results: SwapiPlanet[];
}

export interface SwapiPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export const parseSwapiPlanets = (data: SwapiPlanets): SwapiListResponse => {
  return {
    count: data.count,
    next: data.next,
    previous: data.previous,
    results: data.results.map(planet => ({
      id: planet.url,
      title: planet.name,
      subtitle: `population: ${formatNumberString(
        planet.population,
      )} | climate: ${planet.climate} | terrain: ${
        planet.terrain
      } | diameter: ${formatNumberString(planet.diameter)} | gravity: ${
        planet.gravity
      }`,
    })),
  };
};

export const mockSwapiPlanets: SwapiPlanets = {
  count: 3,
  next: null,
  previous: null,
  results: [
    {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: '1 standard',
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      residents: [
        'https://swapi.dev/api/people/1/',
        'https://swapi.dev/api/people/2/',
        'https://swapi.dev/api/people/4/',
        'https://swapi.dev/api/people/6/',
        'https://swapi.dev/api/people/7/',
        'https://swapi.dev/api/people/8/',
        'https://swapi.dev/api/people/9/',
        'https://swapi.dev/api/people/11/',
        'https://swapi.dev/api/people/43/',
        'https://swapi.dev/api/people/62/',
      ],
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/4/',
        'https://swapi.dev/api/films/5/',
        'https://swapi.dev/api/films/6/',
      ],
      created: '2014-12-09T13:50:49.641000Z',
      edited: '2014-12-20T20:58:18.411000Z',
      url: 'https://swapi.dev/api/planets/1/',
    },
    {
      name: 'Alderaan',
      rotation_period: '24',
      orbital_period: '364',
      diameter: '12500',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'grasslands, mountains',
      surface_water: '40',
      population: '2000000000',
      residents: [
        'https://swapi.dev/api/people/5/',
        'https://swapi.dev/api/people/68/',
        'https://swapi.dev/api/people/81/',
      ],
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/6/',
      ],
      created: '2014-12-10T11:35:48.479000Z',
      edited: '2014-12-20T20:58:18.420000Z',
      url: 'https://swapi.dev/api/planets/2/',
    },
    {
      name: 'Yavin IV',
      rotation_period: '24',
      orbital_period: '4818',
      diameter: '10200',
      climate: 'temperate, tropical',
      gravity: '1 standard',
      terrain: 'jungle, rainforests',
      surface_water: '8',
      population: '1000',
      residents: [],
      films: ['https://swapi.dev/api/films/1/'],
      created: '2014-12-10T11:37:19.144000Z',
      edited: '2014-12-20T20:58:18.421000Z',
      url: 'https://swapi.dev/api/planets/3/',
    },
  ],
};
