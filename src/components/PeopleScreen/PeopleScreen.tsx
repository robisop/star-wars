import {ListView} from 'components/common/ListView';
import {usePeople} from 'hooks/usePeople';

export default function PeopleScreen() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePeople();

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
