import {SwapiListResponse} from 'api/common';
import {SwapiPlanets} from 'api/swapiPlanets';
import {formatNumberString} from 'helpers/formatters';
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
        subtitle: `population: ${formatNumberString(
          planet.population,
        )} | climate: ${planet.climate} | terrain: ${
          planet.terrain
        } | diameter: ${formatNumberString(planet.diameter)} | gravity: ${
          planet.gravity
        }`,
      })),
    };
  });
};

export const usePlanets = () => {
  return useInfiniteQuery<SwapiListResponse>('planets', fetchPlanets, {
    getNextPageParam: (lastPage, _pages) => lastPage.next,
  });
};
