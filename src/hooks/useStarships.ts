import {SwapiListResponse} from 'api/common';
import {SwapiStarships, parseSwapiStarships} from 'api/swapiStarships';
import {useInfiniteQuery} from 'react-query';

const fetchStarships = async ({
  pageParam = 'https://swapi.dev/api/starships/?page=1',
}) => {
  const response = await fetch(pageParam);
  return response.json().then((data: SwapiStarships): SwapiListResponse => {
    return parseSwapiStarships(data);
  });
};

export const useStarships = () => {
  return useInfiniteQuery<SwapiListResponse>('starships', fetchStarships, {
    getNextPageParam: (lastPage, _pages) => lastPage.next,
  });
};
