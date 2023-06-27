import {ListView} from 'components/common/ListView';
import {useStarships} from 'hooks/useStarships';

export default function StarshipsScreen() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useStarships();

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
