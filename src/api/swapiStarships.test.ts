import {mockSwapiStarships, parseSwapiStarships} from './swapiStarships';

describe('swapiStarships', () => {
  describe('parseSwapiStarships', () => {
    it('parses SwapiStarships object into SwapiListResponse', () => {
      const parsedResponse = parseSwapiStarships(mockSwapiStarships);
      expect(parsedResponse).toEqual({
        count: 3,
        next: null,
        previous: null,
        results: [
          {
            id: 'https://swapi.dev/api/starships/3/',
            title: 'Star Destroyer',
            subtitle:
              'model: Imperial I-class Star Destroyer | manufacturer: Kuat Drive Yards | cost: 150,000,000 credits | length: 1,600 | max speed: 975 | crew 47,060 | passengers: n/a | cargo capacity: 36,000,000 | hyperdrive rating: 2.0 | starship class: Star Destroyer',
          },
          {
            id: 'https://swapi.dev/api/starships/9/',
            title: 'Death Star',
            subtitle:
              'model: DS-1 Orbital Battle Station | manufacturer: Imperial Department of Military Research, Sienar Fleet Systems | cost: 1,000,000,000,000 credits | length: 120,000 | max speed: n/a | crew 342,953 | passengers: 843,342 | cargo capacity: 1,000,000,000,000 | hyperdrive rating: 4.0 | starship class: Deep Space Mobile Battlestation',
          },
          {
            id: 'https://swapi.dev/api/starships/10/',
            title: 'Millennium Falcon',
            subtitle:
              'model: YT-1300 light freighter | manufacturer: Corellian Engineering Corporation | cost: 100,000 credits | length: 34.37 | max speed: 1,050 | crew 4 | passengers: 6 | cargo capacity: 100,000 | hyperdrive rating: 0.5 | starship class: Light freighter',
          },
        ],
      });
    });
  });
});
