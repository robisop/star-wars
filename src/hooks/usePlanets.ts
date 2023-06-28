import {SwapiListResponse} from 'api/common';
import {SwapiPlanets, parseSwapiPlanets} from 'api/swapiPlanets';
import {useInfiniteQuery} from 'react-query';

const fetchPlanets = async ({
  pageParam = 'https://swapi.dev/api/planets/?page=1',
}) => {
  const response = await fetch(pageParam);
  return response.json().then((data: SwapiPlanets): SwapiListResponse => {
    return parseSwapiPlanets(data);
  });
};

export const usePlanets = () => {
  return useInfiniteQuery<SwapiListResponse>('planets', fetchPlanets, {
    getNextPageParam: (lastPage, _pages) => lastPage.next,
  });
};
