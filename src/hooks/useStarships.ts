import {SwapiListResponse} from 'api/common';
import {SwapiStarships} from 'api/swapiStarships';
import {formatNumberString} from 'helpers/formatters';
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
      results: data.results.map(starship => ({
        id: starship.url,
        title: starship.name,
        subtitle: `model: ${starship.model} | manufacturer: ${
          starship.manufacturer
        } | cost: ${formatNumberString(
          starship.cost_in_credits,
        )} credits | length: ${formatNumberString(
          starship.length,
        )} | max speed: ${formatNumberString(
          starship.max_atmosphering_speed,
        )} | crew ${formatNumberString(
          starship.crew,
        )} | passengers: ${formatNumberString(
          starship.passengers,
        )} | cargo capacity: ${formatNumberString(
          starship.cargo_capacity,
        )} | hyperdrive rating: ${
          starship.hyperdrive_rating
        } | starship class: ${starship.starship_class}`,
      })),
    };
  });
};

export const useStarships = () => {
  return useInfiniteQuery<SwapiListResponse>('starships', fetchStarships, {
    getNextPageParam: (lastPage, _pages) => lastPage.next,
  });
};
