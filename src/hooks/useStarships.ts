import {SwapiListResponse} from 'api/common';
import {SwapiStarships} from 'api/swapiStarships';
import {useInfiniteQuery} from 'react-query';

const fetchStarships = async ({
  pageParam = 'https://swapi.dev/api/starships/?page=1',
}) => {
  const response = await fetch(pageParam);
  return response.json().then((data: SwapiStarships): SwapiListResponse => {
    return {
      count: data.count,
      next: data.next,
      previous: data.previous,
      results: data.results.map(planet => ({
        id: planet.url,
        title: planet.name,
        subtitle: planet.manufacturer,
      })),
    };
  });
};

export const useStarships = () => {
  return useInfiniteQuery<SwapiListResponse>('starships', fetchStarships, {
    getNextPageParam: (lastPage, _pages) => lastPage.next,
  });
};
