import {SwapiListResponse} from 'api/common';
import {SwapiPeople} from 'api/swapiPeople';
import {useInfiniteQuery} from 'react-query';

const fetchPeople = async ({
  pageParam = 'https://swapi.dev/api/people/?page=1',
}) => {
  const response = await fetch(pageParam);
  return response.json().then((data: SwapiPeople): SwapiListResponse => {
    return {
      count: data.count,
      next: data.next,
      previous: data.previous,
      results: data.results.map(person => ({
        id: person.url,
        title: person.name,
        subtitle: `gender: ${person.gender} | height: ${person.height} | hair: ${person.hair_color} | eyes: ${person.eye_color}`,
      })),
    };
  });
};

export const usePeople = () => {
  return useInfiniteQuery<SwapiListResponse>('people', fetchPeople, {
    getNextPageParam: (lastPage, _pages) => lastPage.next,
  });
};
