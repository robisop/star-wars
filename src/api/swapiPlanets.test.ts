import {mockSwapiPlanets, parseSwapiPlanets} from './swapiPlanets';

describe('swapiPlanets', () => {
  describe('parseSwapiPlanets', () => {
    it('parses SwapiPlanets object into SwapiListResponse', () => {
      const parsedResponse = parseSwapiPlanets(mockSwapiPlanets);
      expect(parsedResponse).toEqual({
        count: 3,
        next: null,
        previous: null,
        results: [
          {
            id: 'https://swapi.dev/api/planets/1/',
            title: 'Tatooine',
            subtitle:
              'population: 200,000 | climate: arid | terrain: desert | diameter: 10,465 | gravity: 1 standard',
          },
          {
            id: 'https://swapi.dev/api/planets/2/',
            title: 'Alderaan',
            subtitle:
              'population: 2,000,000,000 | climate: temperate | terrain: grasslands, mountains | diameter: 12,500 | gravity: 1 standard',
          },
          {
            id: 'https://swapi.dev/api/planets/3/',
            title: 'Yavin IV',
            subtitle:
              'population: 1,000 | climate: temperate, tropical | terrain: jungle, rainforests | diameter: 10,200 | gravity: 1 standard',
          },
        ],
      });
    });
  });
});
