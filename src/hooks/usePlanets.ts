import {SwapiListResponse} from 'api/common';
import {SwapiPlanets} from 'api/swapiPlanets';
import {useInfiniteQuery} from 'react-query';

const fetchPlanets = async ({
  pageParam = 'https://swapi.dev/api/planets/?page=1',
}) => {
  const response = await fetch(pageParam);
  return response.json().then((data: SwapiPlanets): SwapiListResponse => {
    return {
      count: data.count,
      next: data.next,
      previous: data.previous,
      results: data.results.map(planet => ({
        id: planet.url,
        title: planet.name,
        subtitle: planet.population,
      })),
    };
  });
};

export const usePlanets = () => {
  return useInfiniteQuery<SwapiListResponse>('planets', fetchPlanets, {
    getNextPageParam: (lastPage, _pages) => lastPage.next,
  });
};
