import {SwapiStarships} from 'api/swapiStarships';
import {useQuery} from 'react-query';

export const useStarships = () => {
  return useQuery<SwapiStarships>('starships', async () => {
    const response = await fetch('https://swapi.dev/api/starships/');
    return response.json();
  });
};
