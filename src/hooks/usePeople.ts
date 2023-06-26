import {useQuery} from 'react-query';

export const usePeople = () => {
  return useQuery('people', async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    return response.json();
  });
};
