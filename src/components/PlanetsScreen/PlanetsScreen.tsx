import {ListView} from 'components/common/ListView';
import {usePlanets} from 'hooks/usePlanets';

export default function PlanetsScreen() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePlanets();

  return (
    <ListView
      data={data?.pages.map(page => page.results).flat()}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
      isError={isError}
      isFetchingNextPage={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
    />
  );
}
