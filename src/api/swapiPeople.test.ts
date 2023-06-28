import {mockSwapiPeople, parseSwapiPeople} from './swapiPeople';

describe('swapiPeople', () => {
  describe('parseSwapiPeople', () => {
    it('parses SwapiPeople object into SwapiListResponse', () => {
      const parsedResponse = parseSwapiPeople(mockSwapiPeople);
      expect(parsedResponse).toEqual({
        count: 3,
        next: null,
        previous: null,
        results: [
          {
            id: 'https://swapi.dev/api/people/1/',
            title: 'Luke Skywalker',
            subtitle: 'gender: male | height: 172 | hair: blond | eyes: blue',
          },
          {
            id: 'https://swapi.dev/api/people/2/',
            title: 'C-3PO',
            subtitle: 'gender: n/a | height: 167 | hair: n/a | eyes: yellow',
          },
          {
            id: 'https://swapi.dev/api/people/3/',
            title: 'R2-D2',
            subtitle: 'gender: n/a | height: 96 | hair: n/a | eyes: red',
          },
        ],
      });
    });
  });
});
