import {renderHook} from '@testing-library/react-hooks';
import {mockSwapiStarships, parseSwapiStarships} from 'api/swapiStarships';
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from 'react-query';

import {useStarships} from './useStarships';

const queryClient = new QueryClient({
  defaultOptions: {queries: {staleTime: Infinity, cacheTime: 0}},
});

const hookWrapper = ({children}: QueryClientProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useStarships', () => {
  beforeAll(() => {
    jest.spyOn(global, 'fetch').mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve(mockSwapiStarships),
      } as any),
    );
  });

  it('returns correctly parsed starships data', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useStarships(), {
      wrapper: hookWrapper,
    });

    await waitForNextUpdate();

    expect(result.current.data?.pages[0]).toEqual(
      parseSwapiStarships(mockSwapiStarships),
    );
  });
});
