import {SwapiListResponse} from 'api/common';
import {SwapiPeople, parseSwapiPeople} from 'api/swapiPeople';
import {useInfiniteQuery} from 'react-query';

const fetchPeople = async ({
  pageParam = 'https://swapi.dev/api/people/?page=1',
}) => {
  const response = await fetch(pageParam);
  return response.json().then((data: SwapiPeople): SwapiListResponse => {
    return parseSwapiPeople(data);
  });
};

export const usePeople = () => {
  return useInfiniteQuery<SwapiListResponse>('people', fetchPeople, {
    getNextPageParam: (lastPage, _pages) => lastPage.next,
  });
};
