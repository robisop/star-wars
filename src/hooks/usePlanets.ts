import {SwapiPlanets} from 'api/swapiPlanets';
import {useQuery} from 'react-query';

export const usePlanets = () => {
  return useQuery<SwapiPlanets>('planets', async () => {
    const response = await fetch('https://swapi.dev/api/planets/');
    return response.json();
  });
};
