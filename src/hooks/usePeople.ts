import {SwapiPeople} from 'api/swapiPeople';
import {useQuery} from 'react-query';

export const usePeople = () => {
  return useQuery<SwapiPeople>('people', async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    return response.json();
  });
};
